export const blogsData = [
  {
    id: 1,
    title: "Lynx: Tiktok's React Native killer?",
    date: "April 10, 2025",
    description:
      "Exploring Lynx, ByteDance's new cross-platform mobile development framework that aims to revolutionize the industry.",
    readTime: "12 min read",
    author: "Amit Kumar Ghosh",
    tags: [
      "Lynx",
      "Mobile Development",
      "Cross-Platform",
      "React Native",
      "Flutter",
      "TikTok",
      "ByteDance",
    ],
    content: (
      <>
        <div className="mb-8">
          <p className="mb-4 text-justify">
            The world of cross-platform mobile development is constantly
            evolving, and a recent entrant has been making waves: Lynx, a
            technology developed by TikTok's parent company, ByteDance. This
            isn't just another alternative; it's a comprehensive approach aiming
            to address the limitations of existing solutions like React Native
            and Flutter. Let's delve into what makes Lynx noteworthy.
          </p>

          <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
            The Promise of a New Mobile Development Paradigm
          </h2>
          <p className="mb-4 text-justify">
            One of the core motivations behind Lynx is to overcome performance
            bottlenecks often encountered in React Native due to its
            single-threaded JavaScript queue. Lynx introduces a dual-threaded
            architecture with a framework thread and a UI thread, allowing for
            heavy data processing without blocking UI updates, potentially
            leading to smoother 60 FPS performance even on less powerful
            devices. This separation also enables more complex UI interactions
            without the lag sometimes experienced in other frameworks.
            Furthermore, Lynx isn't limited to just being a React Native
            alternative; it's designed to be a broader platform for building
            native UIs for both mobile and web from a single codebase.
          </p>

          <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
            Embracing Web Familiarity with Native Power
          </h2>
          <p className="mb-4 text-justify">
            Interestingly, Lynx allows developers to write markup and CSS much
            like they would for the web, with native support for CSS animations,
            transitions, selectors, and modern visual effects. This lowers the
            barrier to entry for web developers looking to build native mobile
            applications. Unlike Flutter, which uses a custom rendering engine,
            Lynx, similar to React Native, renders native UI elements. This
            commitment to native primitives is seen as crucial for delivering a
            high-quality user experience that doesn't feel like a disguised game
            engine, a point the speaker makes strongly against Flutter. However,
            Lynx also has the flexibility to switch to a custom renderer for
            pixel-perfect consistency across platforms, similar to Flutter's
            approach.
          </p>

          <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
            Faster Development Cycles and Scalability
          </h2>
          <p className="mb-4 text-justify">
            Lynx also tackles the challenges of app distribution and
            scalability. It leverages technologies like module federation,
            allowing different teams to own and deploy parts of the application
            independently without having to update the entire bundle. This,
            combined with the potential for over-the-air updates for non-native
            binding changes, promises faster iteration cycles and reduced
            reliance on lengthy app store review processes. The introduction of
            R Speedy, a build tool based on Rust, further aims to provide fast
            build times crucial for large-scale applications. Additionally, Lynx
            boasts excellent developer tooling, including full Chrome DevTools
            protocol support, a significant improvement over the debugging
            experience in React Native.
          </p>

          <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
            Conclusion
          </h2>
          <p className="mb-4 text-justify">
            Lynx represents a significant step forward in cross-platform mobile
            development, offering a compelling blend of web development
            familiarity with the performance and native feel of
            platform-specific applications. By addressing key pain points in
            existing frameworks, particularly around performance, developer
            experience, and scalability, Lynx has the potential to become a
            major player in the cross-platform landscape. While still early in
            its open-source journey, its production readiness at TikTok and the
            pedigree of its creators suggest a bright future. It's definitely a
            technology worth watching for anyone interested in building
            high-quality mobile apps efficiently.
          </p>

          <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
            Inspired By:
            <a
              key="1"
              href="https://youtu.be/No0k-TMRuMA?si=89YrKJOdn675uKIW"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-5 sm:ml-2 mt-1 sm:mt-0 px-2 py-1 font-medium text-red-600 hover:text-red-800 hover:bg-blue-100 rounded transition-colors"
            >
              [Link]
            </a>
          </h2>

          <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
            Categories/Tags:
          </h2>
          <ul className="flex flex-wrap gap-2 text-sm text-blue-500 mb-4">
            <li>[Lynx]</li>
            <li>[Mobile Development]</li>
            <li>[Cross-Platform]</li>
            <li>[React Native]</li>
            <li>[Flutter]</li>
            <li>[TikTok]</li>
            <li>[ByteDance]</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Why Has Reading Become a Struggle?",
    date: "April 12, 2025",
    description:
      "Exploring the challenges faced by modern students in reading comprehension and sustained reading.",
    readTime: "15 min read",
    author: "Amit Kumar Ghosh",
    tags: ["Reading", "Education", "Literacy", "Technology"],
    content: (
      <div className="mb-8">
        <p className="mb-4 text-justify">
          It's a concerning trend being reported by professors across the
          nation: students, even at the most prestigious universities, are
          struggling to read books. In one instance at Columbia University,
          students in a required class, expected to read about a book a week,
          confessed they simply couldn't manage it, with one student admitting
          to never having been required to read an entire book before. This
          isn't just a university problem; it reflects a broader societal shift
          where people aren't reading anymore, regardless of gender or
          educational background. What's behind this decline in reading? The
          sources point to a confluence of factors.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          The Impact of Early Reading Instruction
        </h2>
        <p className="mb-4 text-justify">
          One significant piece of the puzzle lies in how children have been
          taught to read. For a very long time, the dominant method was phonics,
          which focuses on building reading skills from individual sounds to
          complex words. However, starting around the 1960s, a new approach
          called whole language learning emerged, along with some successor
          ideas like balanced literacy. This method emphasized inferring the
          meaning of words from context, presented as a more natural way to
          learn. The idea was that children had a natural propensity to read and
          would essentially teach themselves with the right context. The
          problem? Whole language learning didn't work, and literacy rates fell
          in the countries that adopted it, including parts of the United
          States, Canada, the UK, New Zealand, and Australia. If foundational
          reading skills weren't properly developed, reading is never going to
          be something that you do for fun. It's never going to be pleasurable.
          It's going to feel really difficult and like a lot of work, naturally
          leading people to avoid it. While whole language learning and balanced
          literacy were never uncontested ideas, and more states and countries
          are bringing back phonics, much of the damage is already done for
          those who were never taught phonics. It's speculated that even
          students who make it to elite universities like Columbia, while likely
          able to read at grade level, may still struggle with the volume of
          reading if their foundational skills weren't strong. Therefore, part
          of the explanation for why fewer people are reading seems to stem from
          how they were taught in school.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          The Role of Educational Reforms and Testing
        </h2>
        <p className="mb-4 text-justify">
          However, the issue isn't solely about initial reading instruction.
          Educational reforms, most notably things like No Child Left Behind and
          Common Core in the United States, have also played a role. These
          reforms emphasized two things: informational text and standardized
          testing. When students were being taught how to engage with text, they
          were learning how to extract information from it. Some even suggested
          that books were outdated and that education should focus on the types
          of text encountered in real life, like articles and web pages. As an
          exercise, a student might be presented with an excerpt from a longer
          text. They would be asked to analyze the argument or talk about what
          evidence was presented in the text or even what the thesis statement
          was. A lot of this would happen in English classes where traditionally
          you would be first exposed to reading longer and more difficult books.
          So instead of learning things like analyzing symbolism or theme or
          being able to practice your close reading of text, you were mostly
          focused on extracting information from those excerpts. Doing that
          traditional English stuff like close reading builds something that we
          could call your reading stamina. When a student who is fully capable
          of reading says that they can't read a whole book in a week, it's
          likely because they haven't had a chance to develop their reading
          stamina. In fact, in one survey only 17% of Educators said that they
          were teaching primarily with whole text. Therefore, the inability of
          students at universities like Columbia to read whole books might be
          more related to this lack of training in sustained reading rather than
          just initial literacy issues. These students were able to get into
          some of the best colleges and universities in the world, but they were
          never taught how to be great readers. They were taught how to be great
          test takers. So when these students get to college and they're asked
          to read whole books, they can't do it because this is a completely
          different skill than they've been told that they need to develop in
          high school. So much of their education has been about optimizing
          themselves for standardized tests and then eventually to take
          something like the SAT or the act. If you're just trying to do really
          well on a standardized test, you need to focus on reading excerpts and
          being able to answer multiple choice questions or maybe write a five
          paragraph essay about what you just read. You don't have to focus on
          analyzing themes in Tolstoy Dostoevsky Dickens. You don't have to
          worry about reading great books. So then if you have a required
          freshman class that's about great novels in the western tradition,
          well this might be your first time being exposed to many of those
          great novels in the western tradition, and it's going to be hard
          because you're not used to it.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          The Pervasiveness of Digital Distractions
        </h2>
        <p className="mb-4 text-justify">
          Finally, we cannot ignore the ubiquitous presence of phones and other
          digital distractions. While many people actually do spend their days
          reading text online through social media, news articles, and captions.
          Platforms like TikTok are maybe the most addictive of these platforms,
          and practically every video has burned in captions, so people are
          constantly reading something when they are online. If you want to get
          any reading done, you have to be disciplined and you have to decide
          that your phone needs to stay inside some place where it can't
          distract you. Imagine that you're a college student and you've never
          read a full book in a week or really ever been asked to read a hard or
          long book for your education and your professor says Hey I want you to
          read Homer's Iliad in a week. Even if you're a good sport and you get
          your book, think about all the things that are there ready to distract
          you—other people or your phone or your laptop. Anything with the
          screen really is there and it's ready to just make you feel more
          stimulated because even if we're people who really like to read
          compared to doing other things, the act of reading is really boring.
          It is the antithesis of our sort of constant need to be over
          stimulated. A lot of schools have decided to start Banning smartphones
          from the classroom. Not only have we systematically failed students as
          we've taught them to read or not taught them to read in some cases,
          we've also just designed a world that is there to constantly demand
          our attention and that takes us away from those deeper reflective sort
          of focus heavy practices like reading good books.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Conclusion
        </h2>
        <p className="mb-4 text-justify">
          In conclusion, the decline in reading habits appears to be a
          multifaceted issue stemming from ineffective early reading instruction
          due to the adoption of whole language learning, an educational system
          that prioritized test-taking over deep reading and focused on
          informational excerpts, and a modern world filled with constant
          digital distractions that compete for our attention. While there's a
          move to reintroduce phonics in early education, the challenge of
          cultivating a love for and ability to engage in sustained reading in
          an attention-demanding world remains significant. Fewer and fewer
          people read books. You have your super readers who read tons of books
          and they keep the average numbers up but you have more and more people
          who decide that reading just isn't for them.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Inspired By:
          <a
            key="1"
            href="https://youtu.be/A3wJcF0t0bQ?si=HB8lcEaIndWGTG6y"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 sm:ml-2 mt-1 sm:mt-0 px-2 py-1 font-medium text-red-600 hover:text-red-800 hover:bg-blue-100 rounded transition-colors"
          >
            [Link]
          </a>
        </h2>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Categories/Tags:
        </h2>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
          <li>[Reading]</li>
          <li>[Education]</li>
          <li>[Literacy]</li>
          <li>[Technology]</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "This Blog Will Cheer You Up!",
    date: "April 22, 2025",
    description:
      "A warm, neuroscience-based guide offering low-effort, science-backed techniques to gently manage sadness.",
    readTime: "5 min read",
    author: "Amit Kumar Ghosh",
    tags: ["Mental Health", "Psychology", "Neuroscience", "Self‑Care"],
    content: (
      <div className="mb-8">
        <p className="mb-4 text-justify">
          If your brain were a neighborhood, your amygdala would be that
          overzealous security guard who jumps at every rustle of leaves. When
          sadness rolls in, it’s just the guard sounding the alarm. It doesn’t
          mean you’re broken—just biologically wired to notice threats
          (emotional or otherwise). Let’s explore how small, science-backed
          steps can help you coexist with your guard, rather than trying to
          silence it.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          1. Name It to Tame It: Emotional Labeling
        </h2>
        <p className="mb-4 text-justify">
          Your amygdala fires faster than a camera flash when it senses
          distress. Research shows that{" "}
          <strong>putting feelings into words</strong> dampens that rush of
          alarm in less than a minute (Lieberman et al., 2007).
          <em>Low‑effort action:</em> Pause, take a breath, and whisper or jot
          down a single word—“sad,” “heavy,” “lonely.” That one word is a
          neurochemical signal: “Okay, guard, we see you.” It doesn’t banish the
          feeling, but it tells your brain it’s acknowledged.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          2. Grounding Techniques: Anchor in the Present
        </h2>
        <p className="mb-4 text-justify">
          Sadness often feels like an echo from the past or a worry for
          tomorrow. Grounding interrupts that loop by using your body as a
          reference point.
          <em>Low‑effort action:</em> Try the <strong>5‑4‑3‑2‑1</strong>{" "}
          exercise:
          <li>
            1. List <strong>5 things</strong> you can see.{" "}
          </li>
          <li>
            2. Identify <strong>4 things</strong> you can touch.
          </li>
          <li>
            3. Notice <strong>3 sounds</strong> around you.
          </li>
          <li>
            4. Acknowledge <strong>2 smells</strong> (or two imagined scents).
          </li>
          <li>
            5. Taste <strong>1 thing</strong>—your breath, a sip of water, or a
            breath of fresh air.
          </li>
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          3. Micro‑Shifts and Neuroplasticity: Small Rewires
        </h2>
        <p className="mb-4 text-justify">
          Neuroplasticity isn’t just for big life changes; your brain updates in
          millisecond bursts, too. Tiny acts of novelty—like shifting posture or
          scanning a different part of the room—send fresh electrical signals
          through your neural highways.
          <em>Low‑effort action:</em> Adjust your seating angle by 15°. Look out
          a window at a tree, then at a ceiling corner. You’re literally nudging
          your brain to form a new connection, however fleeting.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          4. Breathing as a Brake: Diaphragmatic Calm
        </h2>
        <p className="mb-4 text-justify">
          When sadness sweeps in, your breath often flattens—shallow and quick.
          Slowing your exhale activates the parasympathetic system, your
          biologically built-in brake.
          <em>Low‑effort action:</em> Breathe in for a count of{" "}
          <strong>4</strong>, then breathe out for <strong>6</strong>. Repeat
          three times. No deep inhalations needed—just gentle, mindful exhales.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          5. Ritual of Tiny Rewards: Dopamine Doses
        </h2>
        <p className="mb-4 text-justify">
          Your brain rewards you with tiny hits of dopamine for unexpected or
          novel stimuli. You don’t need grand achievements to get these bursts.
          <em>Low‑effort action:</em> Place a sticky note in a random corner of
          your workspace with a doodle or a smiley face. Every time you spot it,
          your brain gets a micro-dose of “hey, that’s new.”
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Why This Matters (Without the Hype)
        </h2>
        <p className="mb-4 text-justify">
          None of these steps promise to banish sadness forever, and they’re not
          about forcing yourself into perpetual cheer. Instead, think of them as{" "}
          <strong>biological parachutes</strong>—tools that slow the emotional
          drop, give you options, and remind you that your nervous system is
          just doing its job.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Final Thought
        </h2>
        <p className="mb-4 text-justify">
          Sadness is not a glitch or moral failing; it’s part of our human
          software. Your brain’s circuitry—amygdala, prefrontal cortex, vagus
          nerve—interacts in loops designed for survival, connection, and yes,
          occasional melancholy. Normalizing sadness means accepting that these
          circuits sometimes run in slow zones. And that’s okay.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title:
      "Understanding Disjoint Set Union (Union-Find): A Powerful Data Structure",
    date: "May 15, 2025",
    description:
      "Dive into the Disjoint Set Union (Union-Find) data structure, learn how it works, its optimizations, and its applications in solving real-world problems like graph connectivity.",
    readTime: "12 min read",
    author: "Amit Kumar Ghosh",
    tags: ["Data Structures", "Algorithms", "Union-Find", "Graph Theory"],
    content: (
      <div className="mb-8">
        <p className="mb-4 text-justify">
          Have you ever wondered how social networks group friends or how
          algorithms detect cycles in a graph? The answer lies in a clever data
          structure called <strong>Disjoint Set Union (DSU)</strong>, also known
          as <strong>Union-Find</strong>. This powerful tool helps manage groups
          of elements efficiently, making it a favorite in computer science for
          solving problems involving connectivity and grouping. In this blog,
          we’ll explore what DSU is, how it works, its optimizations, and where
          it’s used—all in a way that’s easy to grasp!
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          What is Disjoint Set Union? The Basics
        </h2>
        <p className="mb-4 text-justify">
          Disjoint Set Union is a data structure that keeps track of a
          collection of elements divided into non-overlapping groups, called{" "}
          <strong>sets</strong>. Imagine a school where students are grouped
          into different clubs, and no student belongs to more than one club.
          DSU helps answer questions like: “Which club does a student belong
          to?” or “Can we merge two clubs into one?”
        </p>
        <p className="mb-4 text-justify">
          DSU is typically represented as a forest of trees, where each tree is
          a set, and the root of the tree is the <strong>representative</strong>{" "}
          (or leader) of that set. Internally, we use an array to track the
          parent of each element, making it easy to find the root or merge sets.
          The two main operations are:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Find</strong>: Identifies the root of the set an element
            belongs to.
          </li>
          <li>
            <strong>Union</strong>: Merges two sets into one.
          </li>
        </ul>
        <p className="mb-4 text-justify">
          These operations make DSU perfect for problems where you need to group
          elements dynamically, like connecting cities in a network or finding
          friend circles online.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Core Operations: Find, Union, and Path Compression
        </h2>
        <p className="mb-4 text-justify">
          Let’s break down how DSU works by exploring its core operations and a
          key optimization called <strong>Path Compression</strong>.
        </p>

        <h3 className="font-semibold text-lg mb-1">Find: Finding the Leader</h3>
        <p className="mb-4 text-justify">
          The <strong>Find</strong> operation locates the root (leader) of an
          element’s set. Starting from an element, we follow its parent pointers
          until we reach a node that is its own parent—the root. For example, if
          we have a chain like <code>0 → 1 → 4</code>, calling{" "}
          <code>Find(0)</code> traces through <code>0</code> to <code>1</code>{" "}
          to <code>4</code>, returning <code>4</code> as the root.
        </p>

        <h3 className="font-semibold text-lg mb-1">Union: Merging Groups</h3>
        <p className="mb-4 text-justify">
          The <strong>Union</strong> operation combines two sets into one. It
          works by:
          <ol className="list-decimal pl-6">
            <li>
              Finding the roots of the two elements’ sets using{" "}
              <code>Find</code>.
            </li>
            <li>Making one root the parent of the other, merging the trees.</li>
          </ol>
          For instance, to merge sets <code>[0,1]</code> (root <code>1</code>)
          and <code>{4}</code> (root <code>4</code>), we set{" "}
          <code>parent[4] = 1</code>, creating a single set{" "}
          <code>[0, 1, 4]</code>.
        </p>

        <h3 className="font-semibold text-lg mb-1">
          Path Compression: Speeding Things Up
        </h3>
        <p className="mb-4 text-justify">
          Without optimization, following long chains of parents can be slow.
          That’s where <strong>Path Compression</strong> comes in. During a{" "}
          <code>Find</code> operation, we make every element in the path point
          directly to the root, flattening the tree. So, if we have{" "}
          <code>0 → 1 → 4</code>, after <code>Find(0)</code>, it becomes{" "}
          <code>0 → 4</code>, <code>1 → 4</code>. This makes future{" "}
          <code>Find</code> calls lightning-fast!
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Optimization: Union by Rank
        </h2>
        <p className="mb-4 text-justify">
          To make DSU even more efficient, we use <strong>Union by Rank</strong>
          . Each set has a “rank,” which roughly represents the height of its
          tree. When merging two sets:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            If one set’s rank is higher, attach the shorter tree to the taller
            one.
          </li>
          <li>
            If ranks are equal, choose one as the parent and increase its rank
            by 1.
          </li>
        </ul>
        <p className="mb-4 text-justify">
          This keeps trees shallow, reducing the time for <code>Find</code>{" "}
          operations. Combined with Path Compression, it makes DSU incredibly
          efficient.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          A Practical Example: C++ Implementation
        </h2>
        <p className="mb-4 text-justify">
          Let’s see DSU in action with a simple C++ implementation that uses
          Path Compression and Union by Rank. This code is easy to understand
          and perfect for demonstrating how DSU works.
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
          <code>
            {`#include <vector>

class DSU {
private:
    std::vector<int> parent; // Tracks the parent of each element
    std::vector<int> rank;   // Tracks the height (rank) of each set

public:
    // Initialize DSU with n elements
    DSU(int n) {
        parent.resize(n);
        rank.resize(n, 0); // All ranks start at 0
        for (int i = 0; i < n; ++i) {
            parent[i] = i; // Each element is its own parent
        }
    }

    // Find the root with Path Compression
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path Compression
        }
        return parent[x];
    }

    // Merge sets using Union by Rank
    void unionSets(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        if (rootX == rootY) return;
        if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    }
};

// Example usage
#include <iostream>

int main() {
    DSU dsu(5); // Create DSU with 5 elements (0, 1, 2, 3, 4)
    dsu.unionSets(0, 1); // Merge 0 and 1
    dsu.unionSets(2, 3); // Merge 2 and 3
    dsu.unionSets(1, 4); // Merge 1 and 4
    std::cout << "Root of 0: " << dsu.find(0) << std::endl;
    std::cout << "Root of 2: " << dsu.find(2) << std::endl;
    return 0;
}`}
          </code>
        </pre>
        <p className="mb-4 text-justify">
          In this example, we create a DSU with 5 elements and perform unions to
          form sets <code>[0, 1, 4]</code> and <code>[2, 3]</code>. The{" "}
          <code>find</code> calls show the roots of the sets, demonstrating how
          DSU tracks groups.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Where is DSU Used? Real-World Applications
        </h2>
        <p className="mb-4 text-justify">
          DSU is a versatile tool used in many algorithms and applications,
          including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Cycle Detection in Graphs</strong>: Check if adding an edge
            creates a cycle by verifying if two nodes are in the same set.
          </li>
          <li>
            <strong>Kruskal’s Algorithm</strong>: Builds a Minimum Spanning Tree
            (MST) by merging edges while avoiding cycles.
          </li>
          <li>
            <strong>Social Networks</strong>: Groups friends or connections,
            like finding friend circles on platforms like Facebook.
          </li>
          <li>
            <strong>Connected Components</strong>: Identifies distinct groups in
            an undirected graph.
          </li>
        </ul>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Time Complexity: How Fast is DSU?
        </h2>
        <p className="mb-4 text-justify">
          The efficiency of DSU depends on its optimizations:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Without Optimizations</strong>: <code>Find</code> and{" "}
            <code>Union</code> can take O(n) time in the worst case, where n is
            the number of elements.
          </li>
          <li>
            <strong>With Union by Rank</strong>: Reduces tree height to O(log
            n).
          </li>
          <li>
            <strong>With Path Compression + Union by Rank</strong>: Achieves an
            amortized time of O(α(n)) per operation, where α(n) is the inverse
            Ackermann function—essentially constant for all practical purposes.
          </li>
        </ul>
        <p className="mb-4 text-justify">
          This near-constant time makes DSU incredibly fast for large datasets,
          making it a go-to choice for many algorithms.
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Conclusion
        </h2>
        <p className="mb-4 text-justify">
          Disjoint Set Union (Union-Find) is a fascinating and powerful data
          structure that simplifies complex problems involving grouping and
          connectivity. By mastering its core operations—<code>Find</code> and{" "}
          <code>Union</code>—and leveraging optimizations like Path Compression
          and Union by Rank, you can solve problems like cycle detection and
          Minimum Spanning Trees with ease. Whether you’re building a social
          network or analyzing graph structures, DSU is a tool you’ll want in
          your toolkit. Try implementing the code above and experiment with it
          to see DSU in action!
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Inspired By:
        </h2>
        <p className="mb-4">
          <a
            key="1"
            href="https://cp-algorithms.com/data_structures/disjoint_set_union.html"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 sm:ml-2 mt-1 sm:mt-0 px-2 py-1 font-medium text-red-600 hover:text-red-800 hover:bg-blue-100 rounded transition-colors"
          >
            [CP Algorithms: Disjoint Set Union]
          </a>
        </p>

        <h2 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
          Categories/Tags:
        </h2>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
          <li>[Data Structures]</li>
          <li>[Algorithms]</li>
          <li>[Union-Find]</li>
          <li>[Graph Theory]</li>
        </ul>
      </div>
    ),
  },
];

export const blogs = [
  {
    id: 1,
    title: "Why Has Reading Become a Struggle?",
    date: "March 15, 2024",
    description:
      "Exploring the challenges of reading in the digital age and how technology impacts literacy.",
    readTime: "15 min read",
    author: "Amit Kumar Ghosh",
    tags: ["reading", "Education", "Literacy", "Technology"],
  },
  // Add more blogs here...
];
