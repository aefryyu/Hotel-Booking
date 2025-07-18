import HeaderSection from "@/components/header-section";
import Main from "@/components/main";
import {Metadata} from "next";
import {Suspense} from "react";
import RoomSkeleton from "@/components/skeletons/room-skeleton";

export const metadata:Metadata = {
    title: "Rooms & Rates",
    description: "choose your best room today"
}

const RoomPage = () => {
    return (
        <div>
            <HeaderSection title="Rooms & Rates" subtitle="lorem ipsum dolor sit amet, consetetur adipiscing elit, sed do eiusmod" />
            <div className="mt-10 px-4">
                <Suspense fallback={<RoomSkeleton/>}>
                    <Main/>
                </Suspense>

            </div>
        </div>
    );
};

export default RoomPage;