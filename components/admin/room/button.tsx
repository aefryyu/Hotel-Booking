"use client";
import { useState } from "react";
import { deleteRoom } from "@/lib/action";
import { IoTrashOutline } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";

export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
    const [open, setOpen] = useState(false);
    const deleteRoomWithId = deleteRoom.bind(null, id, image);

    return (
        <>
            {/* Delete Button*/}
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer"
            >
                <IoTrashOutline className="size-5" />
            </button>

            {/* Confirmation Modal */}
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-[90%] max-w-md">
                        <div className="flex flex-col items-center text-center">
                            <IoWarningOutline className="text-red-500 size-12 mb-2" />
                            <h2 className="text-lg font-semibold mb-1">Delete Data?</h2>
                            <p className="text-gray-600 text-sm mb-4">
                                Are you sure you want to delete this data? This action cannot be undone.
                            </p>
                        </div>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                                Cancel
                            </button>
                            <form action={deleteRoomWithId}>
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
