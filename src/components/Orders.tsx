import { useState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Loader2, ShoppingBag } from 'lucide-react'

interface OrderItem {
  id: number
  name: string
  quantity: number
  price: number
}

interface Order {
  id: string
  date: string
  status: 'pending' | 'successful'
  total: number
  items: OrderItem[]
}

// This would typically come from an API call
const mockOrders: Order[] = [
  {
    id: '1',
    date: '2023-06-01',
    status: 'pending',
    total: 29.97,
    items: [
      { id: 1, name: 'Creamy Peanut Butter (250g)', quantity: 2, price: 3.99 },
      { id: 2, name: 'Crunchy Peanut Butter (400g)', quantity: 1, price: 5.99 },
    ]
  },
  {
    id: '2',
    date: '2023-05-28',
    status: 'successful',
    total: 45.95,
    items: [
      { id: 3, name: 'Organic Peanut Butter (800g)', quantity: 1, price: 9.99 },
      { id: 4, name: 'Peanut Butter Variety Pack', quantity: 1, price: 35.96 },
    ]
  },
  // Add more mock orders as needed
]

function OrderList({ orders }: { orders: Order[] }) {
  if (orders.length === 0) {
    return <p className="text-center py-4">No orders found.</p>
  }

  return (
    <div className="space-y-4">
      {orders.map(order => (
        <Card key={order.id}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Order #{order.id}</span>
              <Badge variant={order.status === 'pending' ? 'destructive' : 'secondary'}>
                {order.status === 'pending' ? 'Pending' : 'Successful'}
              </Badge>
            </CardTitle>
            <CardDescription>Placed on {new Date(order.date).toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {order.items.map(item => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${order.total.toFixed(2)}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // Simulate API call
    const fetchOrders = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
        setOrders(mockOrders)
        setLoading(false)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch orders. Please try again later.",
          variant: "destructive",
        })
        setLoading(false)
      }
    }

    fetchOrders()
  }, [toast])

  const pendingOrders = orders.filter(order => order.status === 'pending')
  const successfulOrders = orders.filter(order => order.status === 'successful')

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="successful">Successful</TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
          <OrderList orders={pendingOrders} />
        </TabsContent>
        <TabsContent value="successful">
          <OrderList orders={successfulOrders} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export function OrdersPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container flex mx-auto px-4 py-4 justify-between items-center">
          <h1 className="text-2xl font-bold">Peanut Orders</h1>
          <Button variant="secondary" onClick={() => window.history.back()}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </div>
      </header>
      <main className="w-full mx-auto py-8">
        <Orders />
      </main>
    </div>
  )
}