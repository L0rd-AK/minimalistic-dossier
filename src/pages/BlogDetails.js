import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function BlogDetails() {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "Getting Started with React Development",
      date: "March 15, 2024",
      description:
        "A comprehensive guide for beginners starting their journey in React development.",
      readTime: "5 min read",
      tags: ["React", "Web Development", "JavaScript"],
      content: (
        <>
          <div className="mb-8">
  <p className="mb-4">It's a concerning trend being reported by professors across the nation: students, even at the most prestigious universities, are struggling to read books. In one instance at Columbia University, students in a required class, expected to read about a book a week, confessed they simply couldn't manage it, with one student admitting to never having been required to read an entire book before. This isn't just a university problem; it reflects a broader societal shift where people aren't reading anymore, regardless of gender or educational background. What's behind this decline in reading? The sources point to a confluence of factors.</p>

  <h2 className="font-bold text-xl mb-2">The Impact of Early Reading Instruction</h2>
  <p className="mb-4">One significant piece of the puzzle lies in how children have been taught to read. For a very long time, the dominant method was phonics, which focuses on building reading skills from individual sounds to complex words. However, starting around the 1960s, a new approach called whole language learning emerged, along with some successor ideas like balanced literacy. This method emphasized inferring the meaning of words from context, presented as a more natural way to learn. The idea was that children had a natural propensity to read and would essentially teach themselves with the right context. The problem? Whole language learning didn't work, and literacy rates fell in the countries that adopted it, including parts of the United States, Canada, the UK, New Zealand, and Australia. If foundational reading skills weren't properly developed, reading is never going to be something that you do for fun. It's never going to be pleasurable. It's going to feel really difficult and like a lot of work, naturally leading people to avoid it. While whole language learning and balanced literacy were never uncontested ideas, and more states and countries are bringing back phonics, much of the damage is already done for those who were never taught phonics. It's speculated that even students who make it to elite universities like Columbia, while likely able to read at grade level, may still struggle with the volume of reading if their foundational skills weren't strong. Therefore, part of the explanation for why fewer people are reading seems to stem from how they were taught in school.</p>

  <h2 className="font-bold text-xl mb-2">The Role of Educational Reforms and Testing</h2>
  <p className="mb-4">However, the issue isn't solely about initial reading instruction. Educational reforms, most notably things like No Child Left Behind and Common Core in the United States, have also played a role. These reforms emphasized two things: informational text and standardized testing. When students were being taught how to engage with text, they were learning how to extract information from it. Some even suggested that books were outdated and that education should focus on the types of text encountered in real life, like articles and web pages. As an exercise, a student might be presented with an excerpt from a longer text. They would be asked to analyze the argument or talk about what evidence was presented in the text or even what the thesis statement was. A lot of this would happen in English classes where traditionally you would be first exposed to reading longer and more difficult books. So instead of learning things like analyzing symbolism or theme or being able to practice your close reading of text, you were mostly focused on extracting information from those excerpts. Doing that traditional English stuff like close reading builds something that we could call your reading stamina. When a student who is fully capable of reading says that they can't read a whole book in a week, it's likely because they haven't had a chance to develop their reading stamina. In fact, in one survey only 17% of Educators said that they were teaching primarily with whole text. Therefore, the inability of students at universities like Columbia to read whole books might be more related to this lack of training in sustained reading rather than just initial literacy issues. These students were able to get into some of the best colleges and universities in the world, but they were never taught how to be great readers. They were taught how to be great test takers. So when these students get to college and they're asked to read whole books, they can't do it because this is a completely different skill than they've been told that they need to develop in high school. So much of their education has been about optimizing themselves for standardized tests and then eventually to take something like the SAT or the act. If you're just trying to do really well on a standardized test, you need to focus on reading excerpts and being able to answer multiple choice questions or maybe write a five paragraph essay about what you just read. You don't have to focus on analyzing themes in Tolstoy Dostoevsky Dickens. You don't have to worry about reading great books. So then if you have a required freshman class that's about great novels in the western tradition, well this might be your first time being exposed to many of those great novels in the western tradition, and it's going to be hard because you're not used to it.</p>

  <h2 className="font-bold text-xl mb-2">The Pervasiveness of Digital Distractions</h2>
  <p className="mb-4">Finally, we cannot ignore the ubiquitous presence of phones and other digital distractions. While many people actually do spend their days reading text online through social media, news articles, and captions. Platforms like TikTok are maybe the most addictive of these platforms, and practically every video has burned in captions, so people are constantly reading something when they are online. If you want to get any reading done, you have to be disciplined and you have to decide that your phone needs to stay inside some place where it can't distract you. Imagine that you're a college student and you've never read a full book in a week or really ever been asked to read a hard or long book for your education and your professor says Hey I want you to read Homer's Iliad in a week. Even if you're a good sport and you get your book, think about all the things that are there ready to distract you—other people or your phone or your laptop. Anything with the screen really is there and it's ready to just make you feel more stimulated because even if we're people who really like to read compared to doing other things, the act of reading is really boring. It is the antithesis of our sort of constant need to be over stimulated. A lot of schools have decided to start Banning smartphones from the classroom. Not only have we systematically failed students as we've taught them to read or not taught them to read in some cases, we've also just designed a world that is there to constantly demand our attention and that takes us away from those deeper reflective sort of focus heavy practices like reading good books.</p>

  <h2 className="font-bold text-xl mb-2">Conclusion</h2>
  <p className="mb-4">In conclusion, the decline in reading habits appears to be a multifaceted issue stemming from ineffective early reading instruction due to the adoption of whole language learning, an educational system that prioritized test-taking over deep reading and focused on informational excerpts, and a modern world filled with constant digital distractions that compete for our attention. While there's a move to reintroduce phonics in early education, the challenge of cultivating a love for and ability to engage in sustained reading in an attention-demanding world remains significant. Fewer and fewer people read books. You have your super readers who read tons of books and they keep the average numbers up but you have more and more people who decide that reading just isn't for them.</p>

  <h2 className="font-bold text-xl mb-2">Categories/Tags:</h2>
  <ul className="list-disc list-inside">
    <li>Reading</li>
    <li>Education</li>
    <li>Literacy</li>
    <li>Technology</li>
  </ul>
</div>
        </>
      ),
    },
    // ...Add other blog posts with full content
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold text-red-600">Blog post not found</h1>
        <Link
          to="/blog"
          className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
        >
          ← Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${blog.title} - Amit's Blog`}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={`${blog.title} - Amit's Blog`} />
        <meta property="og:description" content={blog.description} />
        <link
          rel="canonical"
          href={`https://amitkumarghosh.vercel.app/blog/${id}`}
        />
      </Helmet>

      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <Link
          to="/blog"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to all posts
        </Link>

        <article className="prose prose-blue max-w-none">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">
            {blog.title}
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{blog.readTime}</span>
              <span className="text-sm text-purple-600 italic">
                {blog.date}
              </span>
            </div>
          </div>

          <div className="mt-8 text-gray-700 leading-relaxed">
            {blog.content}
          </div>
        </article>
      </div>
    </>
  );
}

export default BlogDetails;
