import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Let's Create Something <span className="text-cyan-200">Legendary</span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Ready to join forces? Whether you need a leader, a creator, or a strategic partner, 
            I'm here to help you achieve extraordinary results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-cyan-200">leokanishka2000@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-cyan-200">+94 76 900 5794</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-cyan-200">Gampaha ,Western LK</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <p className="font-semibold mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-12 h-12 p-0 hover:bg-white/20"
                      onClick={() => window.open('https://web.facebook.com/lumbini65', '_blank')}
                    >
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Start a Conversation</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                      <Input 
                        placeholder="Your name" 
                        className="bg-gray-50 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="bg-gray-50 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Subject</label>
                    <Input 
                      placeholder="What's this about?" 
                      className="bg-gray-50 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project or how we can work together..." 
                      rows={5}
                      className="bg-gray-50 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-cyan-200">
            © 2025 MechSys Labs. 🩵 Leading with courage , driven by passion.
          </p>
        </div>
      </div>
    </section>
  );
}