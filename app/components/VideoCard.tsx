"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video } from "../types";
import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/videos/${video.id}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="relative w-full h-48">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {video.description}
          </CardDescription>
          <div className="mt-2">
            <span className="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
              {video.category}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
