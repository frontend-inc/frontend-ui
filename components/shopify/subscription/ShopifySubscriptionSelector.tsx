'use client'

import React, { useEffect, useState } from 'react'
import { getSellingPlanDescription } from 'frontend-shopify'
import { ShopifyProductType } from 'frontend-shopify'
import { Button } from "../../../components"
import { ChevronRight } from 'lucide-react'
import { cn } from "frontend-shadcn"

type ShopifySubscriptionSelectorProps = {
  product: ShopifyProductType
  handleChange: (value: string | null) => void
  activeSellingPlanId?: string | null
}

const ShopifySubscriptionSelector: React.FC<ShopifySubscriptionSelectorProps> = (props) => {
  const { 
    product, 
    activeSellingPlanId = null, 
    handleChange 
  } = props || {}
  const [sellingPlans, setSellingPlans] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (product) {
      const subscriptions =
        //@ts-ignore
        product?.sellingPlanGroups?.edges[0]?.node?.sellingPlans?.edges?.map(
          ({ node }: any) => node
        ) || []
      setSellingPlans(subscriptions)
    }
  }, [product])

  const toggleOpen = () => setIsOpen(!isOpen)

  const handleSelectPlan = (planId: string | null) => {
    handleChange(planId)
    setIsOpen(false)
  }

  if (!sellingPlans || sellingPlans.length === 0) return null

  const activePlan = sellingPlans.find(plan => plan.id === activeSellingPlanId)
  const buttonText = activePlan ? `${activePlan.name} - ${getSellingPlanDescription(activePlan)}` : "Select subscription"

  return (
    <div className="w-full relative">
      <Button
        variant="outline"
        onClick={toggleOpen}
        className="w-full justify-between"
      >
        <span className="truncate">{buttonText}</span>
        <ChevronRight className={cn(
          "ml-2 h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-90"
        )} />
      </Button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg">
          <Button
            variant="ghost"
            onClick={() => handleSelectPlan(null)}
            className="w-full justify-start font-normal"
          >
            <span className="text-muted-foreground italic">No subscription</span>
          </Button>
          {sellingPlans?.map((sellingPlan) => (
            <Button
              key={sellingPlan.id}
              variant="ghost"
              onClick={() => handleSelectPlan(sellingPlan.id)}
              className="w-full justify-start font-normal"
            >
              {sellingPlan?.name} - {getSellingPlanDescription(sellingPlan)}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ShopifySubscriptionSelector