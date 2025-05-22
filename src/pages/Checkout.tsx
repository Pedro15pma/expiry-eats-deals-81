
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, Truck, MapPin, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const checkoutSchema = z.object({
  // Delivery Information
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  phone: z.string().min(10, { message: "Telefone inválido" }),
  address: z.string().min(5, { message: "Endereço é obrigatório" }),
  city: z.string().min(1, { message: "Cidade é obrigatória" }),
  state: z.string().min(1, { message: "Estado é obrigatório" }),
  zipCode: z.string().min(8, { message: "CEP inválido" }),
  
  // Payment Information
  paymentMethod: z.string().min(1, { message: "Selecione um método de pagamento" }),
  cardNumber: z.string().optional(),
  cardHolder: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { cartItems, totalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'delivery' | 'payment' | 'confirmation'>('delivery');
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      paymentMethod: "",
      cardNumber: "",
      cardHolder: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = 15.00;

  const onSubmit = (data: CheckoutFormValues) => {
    if (step === 'delivery') {
      setStep('payment');
    } else if (step === 'payment') {
      // In a real app, you would process the payment with a backend
      console.log("Checkout data:", data);
      setStep('confirmation');
    } else if (step === 'confirmation') {
      toast({
        title: "Compra finalizada!",
        description: "Obrigado por comprar na FreshSave Market.",
      });
      clearCart();
      navigate('/');
    }
  };

  if (totalItems === 0) {
    return (
      <>
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-6">Seu carrinho está vazio</h1>
          <p className="mb-8">Adicione produtos para continuar com a compra</p>
          <Button onClick={() => navigate('/')} className="bg-green-600 hover:bg-green-700">
            Voltar às compras
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Finalizar compra</h1>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          <div className={`flex flex-col items-center ${step === 'delivery' ? 'text-green-600' : 'text-gray-500'}`}>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${step === 'delivery' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              <MapPin size={20} />
            </div>
            <span className="mt-2">Entrega</span>
          </div>
          <div className={`w-24 h-1 ${step === 'delivery' ? 'bg-gray-200' : 'bg-green-600'} mx-2`}></div>
          <div className={`flex flex-col items-center ${step === 'payment' ? 'text-green-600' : 'text-gray-500'}`}>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              <CreditCard size={20} />
            </div>
            <span className="mt-2">Pagamento</span>
          </div>
          <div className={`w-24 h-1 ${step === 'confirmation' ? 'bg-green-600' : 'bg-gray-200'} mx-2`}></div>
          <div className={`flex flex-col items-center ${step === 'confirmation' ? 'text-green-600' : 'text-gray-500'}`}>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${step === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              <Check size={20} />
            </div>
            <span className="mt-2">Confirmação</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {step === 'delivery' && (
                <>
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Truck className="mr-2" />
                    Dados de Entrega
                  </h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome Completo</FormLabel>
                              <FormControl>
                                <Input placeholder="Nome completo" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefone</FormLabel>
                              <FormControl>
                                <Input placeholder="(00) 00000-0000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Endereço</FormLabel>
                            <FormControl>
                              <Input placeholder="Rua, número, complemento" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cidade</FormLabel>
                              <FormControl>
                                <Input placeholder="Cidade" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estado</FormLabel>
                              <FormControl>
                                <Select 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                >
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="UF" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="AC">AC</SelectItem>
                                    <SelectItem value="AL">AL</SelectItem>
                                    <SelectItem value="SP">SP</SelectItem>
                                    <SelectItem value="RJ">RJ</SelectItem>
                                    <SelectItem value="MG">MG</SelectItem>
                                    {/* Add other states */}
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CEP</FormLabel>
                              <FormControl>
                                <Input placeholder="00000-000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="pt-4">
                        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                          Continuar para pagamento
                        </Button>
                      </div>
                    </form>
                  </Form>
                </>
              )}

              {step === 'payment' && (
                <>
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <CreditCard className="mr-2" />
                    Método de Pagamento
                  </h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Selecione o método de pagamento</FormLabel>
                            <FormControl>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Selecione uma opção" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="credit">Cartão de Crédito</SelectItem>
                                  <SelectItem value="debit">Cartão de Débito</SelectItem>
                                  <SelectItem value="pix">PIX</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {form.watch('paymentMethod') === 'credit' && (
                        <>
                          <FormField
                            control={form.control}
                            name="cardNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Número do Cartão</FormLabel>
                                <FormControl>
                                  <Input placeholder="0000 0000 0000 0000" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="cardHolder"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome no Cartão</FormLabel>
                                <FormControl>
                                  <Input placeholder="NOME COMPLETO" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="expiryDate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Data de Validade</FormLabel>
                                  <FormControl>
                                    <Input placeholder="MM/AA" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="cvv"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>CVV</FormLabel>
                                  <FormControl>
                                    <Input placeholder="123" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </>
                      )}

                      {form.watch('paymentMethod') === 'pix' && (
                        <div className="p-6 border rounded-md text-center">
                          <p className="mb-4">Escaneie o QR Code abaixo ou copie o código PIX</p>
                          <div className="bg-gray-200 h-40 w-40 mx-auto mb-4 flex items-center justify-center text-gray-500">
                            QR Code PIX
                          </div>
                          <Button variant="outline" className="mb-2 w-full">
                            Copiar código PIX
                          </Button>
                          <p className="text-sm text-gray-500">
                            Após o pagamento, enviaremos a confirmação por e-mail
                          </p>
                        </div>
                      )}

                      <div className="flex gap-4 pt-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setStep('delivery')}
                          className="w-1/2"
                        >
                          Voltar
                        </Button>
                        <Button 
                          type="submit" 
                          className="w-1/2 bg-green-600 hover:bg-green-700"
                        >
                          Finalizar Pedido
                        </Button>
                      </div>
                    </form>
                  </Form>
                </>
              )}

              {step === 'confirmation' && (
                <div className="text-center py-8">
                  <div className="rounded-full bg-green-100 p-4 w-24 h-24 mx-auto flex items-center justify-center mb-6">
                    <Check className="h-12 w-12 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Pedido Confirmado!</h2>
                  <p className="text-gray-600 mb-6">
                    Seu pedido foi registrado e está sendo processado.
                    Você receberá uma confirmação por e-mail em breve.
                  </p>
                  <Button 
                    onClick={() => navigate('/')}
                    className="bg-green-600 hover:bg-green-700 w-full"
                  >
                    Continuar Comprando
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded bg-gray-100 mr-3 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete:</span>
                  <span>R$ {shippingCost.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>R$ {(totalPrice + shippingCost).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
