import { Avatar, AvatarFallback, AvatarImage, Button, Drawer, DrawerAction, DrawerContent, Skeleton, SkeletonLine } from 'keep-react'
import React from 'react'

export default function NavigationBar() {
  return (
    <div className='bg-[#2D2D2D] sticky top-0'>
      <div className='flex justify-between mx-10 py-5 items-center gap-5'>
        <div>
          <h1 className='text-[40px] text-white font-bold uppercase'>Dream Bar</h1>
        </div>
        <div>
          <Drawer>
            <DrawerAction asChild>

              <Avatar className=' cursor-pointer'>
                <AvatarImage src="/images/avatar/avatar-1.png" />
                <AvatarFallback>KR</AvatarFallback>
              </Avatar>
            </DrawerAction>
            <DrawerContent>
              <div className="mx-auto max-w-md space-y-3 px-6 py-8 lg:px-0">
                <Skeleton className="space-y-2.5">
                  <SkeletonLine className="h-[200px]" />
                  <SkeletonLine className="h-4" />
                  <SkeletonLine className="h-4" />
                  <SkeletonLine className="h-4" />
                  <SkeletonLine className="h-4" />
                  <SkeletonLine className="h-10 w-1/3" />
                </Skeleton>
              </div>
            </DrawerContent>
          </Drawer>

        </div>
      </div>
    </div>
  )
}
