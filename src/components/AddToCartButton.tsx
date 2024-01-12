'use client'

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Product } from "@/payload-types"
import { cn } from "@/lib/utils"
import { useCart } from "@/hooks/use-cart"

const AddToCartButton = ({ product }: { product: Product}) => {

   const [isSuccess, setIsSuccess] = useState<boolean>(false)

   // ADD ITEMS TO CART
   const { addItem } = useCart()

   useEffect(() => {
    const timeout = setTimeout(() => {
        setIsSuccess(false)
    }, 1000)

    return () => clearTimeout(timeout)
   }, [])

  return (
    <Button onClick={() => {addItem(product); setIsSuccess(true)}} size='lg' className={cn(`w-full`, isSuccess && 'bg-green-500 hover:bg-green-600')}>
       {isSuccess ? 'Added!' : 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton