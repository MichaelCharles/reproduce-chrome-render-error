"use client";
import Layout from "@/components/Layout";

export default function Page() {
  return (
    <div>
      <div className={"absolute inset-0 bg-cyan-500 opacity-50"} />
      <div className="z-10 relative space-y-5">
        <div className="flex flex-grow justify-end">
          <button className="relative inline-flex items-center p-2 space-x-1.5 text-sm text-gray-900 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 disabled:text-gray-400 rounded-l-md">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

Page.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
