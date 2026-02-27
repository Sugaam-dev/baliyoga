export function CTASection() {
  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Ready to Begin Your Yoga Journey?
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Join our community of practitioners and find the perfect course for your practice level and goals.
          </p>

          <form className="space-y-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Course Information
            </button>
          </form>

          <p className="text-sm text-muted-foreground">
            We'll send you information about our courses and special offers. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
