"use client";
import { IEvent } from "@/lib/database/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  const hasdEventFinish = new Date(event.endDateTime) < new Date();
  return (
    <div className=" flex gap-3">
      {/* cannt buy past events  */}
      {hasdEventFinish ? (
        <p className=" p-2 text-red-500">
          {" "}
          Sorry tickets are no longer available
        </p>
      ) : (
        <>
          <SignedOut>
            <Button asChild className=" rounded " size="lg">
              <Link href="/sign-in">Get Tickets</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
