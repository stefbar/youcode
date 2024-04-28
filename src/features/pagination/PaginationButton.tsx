'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export type CoursePaginationButtonProps = {
    totalPages: number;
    page: number;
    baseUrl: string;
};

export const CoursePaginationButton = (props: CoursePaginationButtonProps) => {

    const router = useRouter();
    return (
        <div className="flex items-center justify-center gap-2">
            <Button
                variant="outline"
                size="sm"
                disabled={props.page === 1}
                onClick={() => {
                    const searchParams = new URLSearchParams({
                        page: String(props.page - 1),
                    });
                    const url = `${props.baseUrl}?${searchParams.toString()}`;
                    router.push(url);	
                }}>
                    Previous
            </Button>

            <Button
                variant="outline"
                size="sm"
                disabled={props.page === props.totalPages}
                onClick={() => {
                    const searchParams = new URLSearchParams({
                        page: String(props.page + 1),
                    });
                    const url = `${props.baseUrl}?${searchParams.toString()}`;
                    router.push(url);	
                }}>
                    Next
            </Button>
        </div>
    );
}