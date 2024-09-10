

import {  FC } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define the structure of the blog data
interface BlogData {
  title: string;
  description: string;
}

// Define the props for AddBlog component
interface AddBlogProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  openModal: boolean;
  setOpenModal: (loading: boolean) => void;
  blogData: BlogData;
    setBlogData: (data: BlogData) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    datahandler:any
}

const AddBlog: FC<AddBlogProps> = ({ loading, blogData, setBlogData,datahandler,openModal ,setOpenModal}) => {



  return (
    <div>
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add New Blog
      </Button>
      <div>
        <Dialog open={openModal} onOpenChange={() => {
          setOpenModal(false);
          setBlogData({
            title: "",
            description: ""
          });
        }}>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle>Add New Blog</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={blogData.title}
                  onChange={(e) =>
                    setBlogData({
                      ...blogData,
                      title: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={blogData.description}
                  onChange={(e) =>
                    setBlogData({
                      ...blogData,
                      description: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={datahandler} disabled={loading}>
                {loading ? "Adding..." : "Add Blog"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddBlog;
