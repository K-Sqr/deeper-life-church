import type { Metadata } from "next"
import { BookOpen, Video, Download, FileText, ExternalLink, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ZOOM_LINK } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Access Bible study materials, join online services, and stay connected with Deeper Life Bible Church Maple Grove.",
}

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Resources</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Access Bible study materials, join online, and stay connected.
        </p>
      </div>

      {/* Join Online */}
      <section className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
            <Video className="h-5 w-5" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="font-semibold text-lg">
              Join Our Services Online
            </h2>
            <p className="text-sm text-gray-600">
              Can&apos;t make it in person? Join us live via Zoom during any of
              our services.
            </p>
          </div>
          <Button asChild className="bg-blue-800 hover:bg-blue-700 shrink-0">
            <a href={ZOOM_LINK} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open Zoom Link
            </a>
          </Button>
        </div>
      </section>

      {/* Study Materials */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-700" />
          Study Materials
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border rounded-xl p-5 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">Search the Scriptures</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Our Bible study booklet for daily scripture reading and
                  reflection.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="/pdfs/search-the-scriptures.pdf" download>
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Bell className="h-5 w-5 text-blue-700" />
          Announcements
        </h2>
        <div className="border rounded-xl p-6 bg-gray-50">
          <p className="text-gray-600 text-center py-4">
            No current announcements. Check back soon or join us during service
            for the latest updates.
          </p>
        </div>
      </section>
    </div>
  )
}
