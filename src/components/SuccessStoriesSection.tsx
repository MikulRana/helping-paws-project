import successStory1 from "@/assets/success-story-1.jpg";
import successStory2 from "@/assets/success-story-2.jpg";

const SuccessStoriesSection = () => {
  const stories = [
    {
      id: 1,
      name: "Luna",
      breed: "Beagle",
      image: successStory1,
      device: "Custom Prosthetic Leg",
      story: "Luna lost her front leg in an accident but never lost her spirit. With her custom prosthetic, she's back to chasing squirrels and exploring the neighborhood. Her owner says she's more confident than ever and loves showing off her new 'bionic' leg to other dogs at the park."
    },
    {
      id: 2,
      name: "Max",
      breed: "German Shepherd",
      image: successStory2,
      device: "Mobility Wheelchair",
      story: "After a spinal injury left Max's rear legs paralyzed, his family thought their active days were over. His custom wheelchair changed everything. Now Max goes on beach runs, hikes trails, and even participates in adaptive dog sports. His wheelchair has given him freedom and his family hope."
    }
  ];

  return (
    <section id="stories" className="py-20 bg-warm-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-healing-blue to-caring-green mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet some of the amazing dogs whose lives have been transformed by our assistive devices.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {stories.map((story, index) => (
            <div 
              key={story.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={story.image}
                    alt={`${story.name} - ${story.breed}`}
                    className="w-full h-96 object-cover rounded-2xl shadow-gentle transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Story Content */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl p-8 shadow-gentle">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-healing-blue to-caring-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {story.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {story.name}
                      </h3>
                      <p className="text-muted-foreground">{story.breed}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="inline-block bg-accent rounded-full px-4 py-2">
                      <span className="text-sm font-medium text-accent-foreground">
                        Device: {story.device}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {story.story}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-gentle max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Share Your Success Story
            </h3>
            <p className="text-muted-foreground mb-6">
              Has our device helped your dog? We'd love to hear about your journey and share your story to inspire others.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center text-healing-blue hover:text-healing-blue-light transition-colors font-medium"
            >
              Contact us to share your story →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;