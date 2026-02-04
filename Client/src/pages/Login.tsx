import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Lock, Mail, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/portal/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userEmail', data.email);
                toast({
                    title: 'Welcome back!',
                    description: 'Login successful.',
                });
                navigate('/admin');
            } else {
                toast({
                    title: 'Login Failed',
                    description: data.message || 'Invalid credentials.',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            console.error('Login error:', error);
            toast({
                title: 'Network Error',
                description: 'Unable to connect to the server. Please check your internet connection and try again.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <SEOHead
                title="Admin Login"
                description="Secure admin login portal for Eagle Byte."
            />
            <section className="pt-32 pb-20 min-h-screen flex items-center justify-center">
                <div className="container-custom max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8"
                    >
                        <div className="text-center mb-8">
                            <h1 className="font-display text-3xl font-bold mb-2">
                                Admin <span className="text-gradient">Login</span>
                            </h1>
                            <p className="text-muted-foreground">
                                Enter your credentials to access the dashboard.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input pl-10"
                                        placeholder="admin@eaglebyte.dev"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="form-input pl-10"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <LogIn size={18} />
                                        Login
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Login;
