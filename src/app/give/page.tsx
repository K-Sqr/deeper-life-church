import Link from "next/link"
import type { Metadata } from "next"
import { Wallet, Banknote, HeartHandshake, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support Deeper Life Bible Church Maple Grove through your generous giving. Learn about our giving options and how your gifts make an impact.",
}

export default function Give() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Give</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto italic">
          &ldquo;Each of you should give what you have decided in your heart to
          give, not reluctantly or under compulsion, for God loves a cheerful
          giver.&rdquo;
        </p>
        <p className="text-sm text-gray-500 mt-2">— 2 Corinthians 9:7</p>
      </div>

      {/* Giving Methods */}
      <div className="space-y-5 mb-12">
        {/* Zelle – Coming Soon */}
        <div className="border-2 border-dashed border-blue-200 rounded-xl p-6 bg-blue-50/50">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <Wallet className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-lg">Zelle</h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                  <Clock className="h-3 w-3" />
                  Coming Soon
                </span>
              </div>
              <p className="text-sm text-gray-600">
                We&apos;re setting up Zelle for easy online giving. This option
                will be available shortly.
              </p>
            </div>
          </div>
        </div>

        {/* In-Person */}
        <div className="border rounded-xl p-6 bg-white">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-lg bg-green-50 text-green-700 flex items-center justify-center">
              <Banknote className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                In-Person Giving
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                You can give during any of our services using cash or check.
                Offering envelopes are available at the entrance.
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>Sunday: 9:00 AM – 1:00 PM</p>
                <p>Wednesday: 6:00 PM – 8:00 PM</p>
                <p>Friday: 6:00 PM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Give */}
      <section className="bg-gray-50 rounded-xl p-8 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <HeartHandshake className="h-5 w-5 text-blue-700" />
          <h2 className="text-2xl font-semibold">Why We Give</h2>
        </div>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p>
            At Deeper Life Bible Church, your giving directly supports our
            mission to grow deeper in God&apos;s Word and reach our community
            with the gospel.
          </p>
          <p>
            We are currently trusting God for our own church building. Your
            faithful and generous giving brings us closer to this vision every
            day.
          </p>
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          How Your Giving Makes an Impact
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="text-center p-5 rounded-xl border bg-white">
            <p className="text-2xl font-bold text-blue-800 mb-1">Worship</p>
            <p className="text-sm text-gray-600">
              Venue rental, equipment, and supplies for weekly services
            </p>
          </div>
          <div className="text-center p-5 rounded-xl border bg-white">
            <p className="text-2xl font-bold text-blue-800 mb-1">Outreach</p>
            <p className="text-sm text-gray-600">
              Community evangelism and sharing the gospel
            </p>
          </div>
          <div className="text-center p-5 rounded-xl border bg-white">
            <p className="text-2xl font-bold text-blue-800 mb-1">Building</p>
            <p className="text-sm text-gray-600">
              Saving toward our future permanent church home
            </p>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <div className="text-center">
        <p className="text-gray-600 mb-3">Have questions about giving?</p>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
