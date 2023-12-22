import { Button } from "@/components/ui/button";

import Collection from "@/components/shared/Collection";
import Link from "next/link";
import React from "react";
import events from "events";
import { auth } from "@clerk/nextjs";
import { getEventsByUser } from "@/lib/actions/event.action";

const Profilepage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const OrganizedEvents = await getEventsByUser({ userId, page: 1 });

  return (
    <>
      {/* my ticktes */}
      <section className=" bg-primary-50  bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className=" wrapper flex items-center  justify-center sm:justify-between">
          <h2 className=" h3-bold text-center sm:text-left underline">
            My Tickets
          </h2>
          <Button
            asChild
            size="lg"
            className=" underline-offset-4 button hidden sm:flex "
          >
            <Link href="/#events">Explore More Events..!</Link>
          </Button>
        </div>
      </section>
      {/* <section className=" wrapper my-8">
        <Collection
          data={events?.data}
          emptyTitle="No tickets  purchsed yet"
          emptyStateSubtext="No wOrRiEs - You many events to explore! In SHOONYA"
          collectionType="My_Tickets"
          limit={6}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section> */}
      <section className=" bg-primary-50  bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className=" wrapper flex items-center  justify-center sm:justify-between">
          <h2 className=" h3-bold text-center sm:text-left underline">
            Events Organized
          </h2>
          <Button
            asChild
            size="lg"
            className=" underline-offset-4 button hidden sm:flex "
          >
            <Link href="/events/crate">Create New Event </Link>
          </Button>
        </div>
      </section>
      <section className=" wrapper my-8">
        <Collection
          data={OrganizedEvents?.data}
          emptyTitle="No  Events have been created yet"
          emptyStateSubtext="No wOrRiEs - GO create some now  In SHOONYA"
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default Profilepage;
