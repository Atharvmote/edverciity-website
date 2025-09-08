import React, { useState, useMemo } from 'react';
import './GoogleReviewsSide.css';
import googleReview from '../../assets/Body/goooooogleeee.jpg';

function generateMockReviews(count) {
  const names = [
    'Aarav P.', 'Isha K.', 'Rohan S.', 'Priya M.', 'Kabir T.', 
    'Meera D.', 'Vikram N.', 'Ananya G.', 'Samar V.', 'Neha R.',
    'Aditya S.', 'Sneha L.', 'Karan J.', 'Tara P.', 'Raghav M.',
    'Diya C.', 'Arjun K.', 'Naina S.', 'Vivaan R.', 'Anika T.',
    'Shivansh P.', 'Maya K.', 'Reyansh S.', 'Sanya M.', 'Aryan D.',
    'Ishaan V.', 'Kiara R.', 'Rudra P.', 'Anvi S.', 'Ayaan M.',
    'Pooja K.', 'Devansh T.', 'Nisha L.', 'Aarohi S.', 'Ritik J.',
    'Siddharth M.', 'Vaishnavi P.', 'Yash R.', 'Ira K.', 'Kunal S.',
    'Myra T.', 'Raghav D.', 'Aahana P.', 'Kabir M.', 'Anushka R.',
    'Advik S.', 'Kiara P.', 'Shaurya K.', 'Riya S.', 'Arnav M.',
    'Mehul D.', 'Sakshi K.', 'Arya P.', 'Dhruv S.', 'Anaya R.',
    'Vivaan T.', 'Ishita M.', 'Kartik P.', 'Ridhima S.', 'Aarush K.',
    'Pallavi R.', 'Arhaan M.', 'Mihika S.', 'Ritvik P.', 'Tanishq K.',
    'Saanvi R.', 'Pranav M.', 'Anika S.', 'Vihaan P.', 'Shreya K.',
    'Reyansh T.', 'Aditi M.', 'Rohan P.', 'Ira S.', 'Siddhant K.',
    'Myra P.', 'Advait R.', 'Ananya S.', 'Aryan P.', 'Meera K.',
    'Kiaan S.', 'Tara M.', 'Aarav R.', 'Ishani P.', 'Raghav S.',
    'Sanya K.', 'Vivaan P.', 'Anvi M.', 'Ritik S.', 'Kiara R.',
    'Aditya P.', 'Naina K.', 'Dhruv M.', 'Vaishnavi S.', 'Arjun P.',
    'Maya R.', 'Rudra K.', 'Anushka S.', 'Ayaan P.', 'Diya R.'
  ];

 const comments = [
  "Edverciity has been a turning point for me. The AutoCAD training was hands-on and well-structured. The instructor made sure no one was left behind. I’m now confident with my design work.",
  "Great institute for beginners in CAD. The classes were interactive, though I feel there could be a bit more focus on advanced projects.",
  "I really liked the way practical examples were given alongside theory. It made learning CAD much easier.",
  "The trainers were patient and always ready to clarify doubts. It’s a very supportive environment.",
  "The course content is updated and relevant to current industry standards.",
  "Edverciity has a very student-friendly approach. They not only focus on theory but also give real-time examples that boost practical understanding.",
  "I had zero knowledge of CAD tools when I joined, but now I can confidently work on projects. Thanks to the trainers for their support.",
  "The labs are well-equipped, and the software provided was up-to-date with industry requirements.",
  "I really liked the way doubts were addressed in class. The instructors never rushed through concepts and ensured everyone understood.",
  "This was my first training program outside college, and I must say it was worth every penny.",
  "The overall learning experience here was excellent and beyond expectations.",
  "The trainers not only teach software but also explain how it is applied in real industry projects.",
  "I was able to crack my internship interview because of the practical knowledge gained here.",
  "Edverciity provides well-structured modules that make learning very smooth.",
  "Small batch sizes ensure every student gets proper attention.",
  "The trainers are approachable, polite, and always motivate students to do better.",
  "Assignments and project work gave me real confidence to handle CAD drawings.",
  "The environment is positive and motivating, perfect for learning.",
  "Flexible class timings really helped me manage studies along with college.",
  "This institute gave me the clarity and confidence to work on industry-level CAD projects.",
  "The AutoCAD training here is very practical and focused on real-world applications, which helped me a lot in my engineering studies.",
  "I loved how trainers shared their professional experiences to make concepts easier to understand.",
  "The one-to-one doubt solving sessions made a huge difference in my learning journey.",
  "Edverciity ensures that students not only learn CAD but also gain confidence to use it in professional settings.",
  "The projects assigned during training were very practical and closely related to industry requirements.",
  "Trainers were very supportive and always encouraged us to think creatively rather than just follow steps.",
  "The structured syllabus and step-by-step approach made even tough concepts easier.",
  "I liked how trainers focused on both theoretical knowledge and practical exposure equally.",
  "The institute has a professional atmosphere, and everything is well organized from classes to practice sessions.",
  "I improved not just in CAD, but also in communication and presentation skills.",
  "The environment here was encouraging, and I always felt motivated to perform better.",
  "Edverciity really helped me gain clarity on how CAD tools are applied in real industries.",
  "Every session was interactive and trainers always ensured that nobody was left behind.",
  "I joined with no prior knowledge, but after completing the course I can confidently work on CAD projects.",
  "Assignments given after each module helped me stay consistent with practice.",
  "I really liked the flexibility in scheduling classes which made it easy for me to balance with college.",
  "Edverciity stands out because of its focus on industry-level applications of CAD.",
  "The training was not just about software but also about building overall technical confidence.",
  "Trainers were always approachable, no matter how many doubts we had.",
  "The infrastructure was really good with updated software and systems.",
  "This program was worth the investment, I feel much more confident in my technical career now.",
  "I loved the balance between theory and practical exercises, it made learning enjoyable.",
  "The projects we did were very similar to real-world assignments, which boosted my confidence.",
  "The trainers also gave us career guidance and tips for interviews, which was a bonus.",
  "The group discussions during class helped me learn from my peers as well.",
  "I was able to apply what I learned here directly into my college projects.",
  "The pace of teaching was perfect, not too fast and not too slow.",
  "I was impressed with the study material provided, which is still useful for revision.",
  "The trainers are highly skilled and explain concepts with great patience.",
  "Edverciity ensures every student gets proper attention, thanks to small batch sizes.",
  "I got timely feedback on my assignments, which helped me improve continuously.",
  "The institute takes student feedback seriously and keeps improving.",
  "I liked how trainers used real-life examples to explain even complex CAD concepts.",
  "This program completely changed my confidence level in technical drawings.",
  "The institute has a very supportive and student-friendly approach.",
  "I found the trainers approachable even after class hours, which was very helpful.",
  "The content taught was updated with current industry standards.",
  "I was able to complete my training smoothly without any scheduling issues.",
  "The trainers never rushed through topics and ensured everyone understood properly.",
  "The program gave me confidence to present my designs in front of others.",
  "The labs were always clean, well-equipped, and up-to-date.",
  "I liked the constructive feedback I received after every project.",
  "The teaching methods were flexible and helped me grasp difficult topics easily.",
  "The sessions were never boring, even during theory-heavy topics.",
  "I found the learning atmosphere very positive and motivating.",
  "This program helped me improve both technical and soft skills.",
  "The trainers encouraged creativity and thinking beyond textbooks.",
  "The detailed explanations helped me build a strong foundation in CAD.",
  "I really liked the interactive nature of sessions where students were encouraged to ask questions.",
  "The institute gave me clarity on career paths along with technical training.",
  "The group activities kept us engaged and made learning fun.",
  "Trainers always made sure to clear even the smallest doubts without hesitation.",
  "I loved the way they structured the syllabus in a step-by-step manner.",
  "The projects gave me real exposure to industry-style work.",
  "I feel industry-ready after completing this course at Edverciity.",
  "The trainers are not only knowledgeable but also very approachable.",
  "The positive environment here motivated me to perform better.",
  "This course was one of the best decisions in my academic journey.",
  "I now feel confident to work on CAD software independently.",
  "The assignments were challenging and helped me practice daily.",
  "I liked how practical tasks were integrated with theory in every session.",
  "The institute provided a professional learning atmosphere.",
  "The personal attention I got from trainers was very valuable.",
  "Every module was well-planned and easy to follow.",
  "The practice labs were always available, which was very convenient.",
  "The teaching style here is unique and makes learning very effective.",
  "The trainers even guided us on how CAD is applied in various industries.",
  "This institute has given me long-term skills I will use in my career.",
  "The supportive faculty made learning stress-free and enjoyable.",
  "The projects were very realistic and taught us industry expectations.",
  "The environment was motivating, and my peers were also cooperative.",
  "I really appreciated the punctuality and discipline maintained here.",
  "The feedback from trainers was always constructive and useful.",
  "I loved the balance of practice and theory in the sessions.",
  "The trainers used a lot of visual examples which made concepts clearer.",
  "I feel much more confident in technical drawings after this program.",
  "The institute ensures equal attention to all students.",
  "I found the training cost-effective compared to the quality provided.",
  "The trainers made sure every concept was clear before moving ahead.",
  "This training gave me clarity on industry standards and requirements.",
  "The sessions were always engaging, never monotonous.",
  "Edverciity has provided me with both technical knowledge and confidence.",
  "The program exceeded my expectations and was worth every moment."
];


  const reviews = [];
  for (let i = 0; i < count; i++) {
    const name = names[i % names.length];
    const text = comments[i % comments.length];
    const rating = 4 + (i % 2 === 0 ? 1 : 0.9);
    const date = new Date();
    date.setDate(date.getDate() - (i % 50));
    const helpful = 2 + (i % 15);
    const tags = [
      i % 3 === 0 ? 'Full stack' : null,
      i % 4 === 0 ? 'Auto-CAD' : null,
      i % 5 === 0 ? 'Revit' : null,
      i % 6 === 0 ? 'Data Science' : null,
      i % 7 === 0 ? 'AI' : null,
    ].filter(Boolean);

    reviews.push({ 
      id: i + 1, 
      name, 
      text, 
      rating: Number(rating.toFixed(1)), 
      date: date.toISOString().slice(0, 10), 
      helpful, 
      tags 
    });
  }
  return reviews;
}

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const stars = [];
  for (let i = 0; i < fullStars; i++) stars.push('full');
  if (hasHalf) stars.push('half');
  while (stars.length < 5) stars.push('empty');

  return (
    <div className="gr-stars">
      {stars.map((type, idx) => (
        <span key={idx} className={`star ${type}`}>★</span>
      ))}
    </div>
  );
}

export default function GoogleReviewsSidebar() {
  const [open, setOpen] = useState(false);
  const [chip, setChip] = useState("All");
  const [sortBy, setSortBy] = useState("Most relevant");

  const reviews = useMemo(() => generateMockReviews(200), []); 
  const avg = 4.9;
  const distribution = { 5: 97, 4: 94, 3: 74, 2: 1, 1: 1 };

  // chips (filters)
  const chips = useMemo(() => [
    "All",
    `Full stack (${reviews.filter(r => r.tags.includes("Full stack")).length})`,
    `Data Science (${reviews.filter(r => r.tags.includes("Data Science")).length})`,
    `AI (${reviews.filter(r => r.tags.includes("AI")).length})`,
    `Auto-CAD (${reviews.filter(r => r.tags.includes("Auto-CAD")).length})`,
    `Revit (${reviews.filter(r => r.tags.includes("Revit")).length})`,
  ], [reviews]);

  // filter + sort reviews
  const filteredSorted = useMemo(() => {
    let list = reviews;
    if (chip !== "All") {
      const tag = chip.replace(/ \(\d+\)$/, "");
      list = reviews.filter(r => r.tags.includes(tag));
    }

    const byNewest = (a, b) => (a.date < b.date ? 1 : -1);
    const byHighest = (a, b) => b.rating - a.rating || byNewest(a, b);
    const byHelpful = (a, b) => b.helpful - a.helpful || byNewest(a, b);
    const byRelevant = (a, b) => (b.rating * b.helpful) - (a.rating * a.helpful) || byNewest(a, b);

    const sorters = {
      "Newest": byNewest,
      "Highest rating": byHighest,
      "Most helpful": byHelpful,
      "Most relevant": byRelevant,
    };

    return [...list].sort(sorters[sortBy] || byRelevant);
  }, [reviews, chip, sortBy]);

  return (
    <>
      {/* Toggle Button */}
      <button className={`gr-toggle ${open ? 'hidden' : ''}`} onClick={() => setOpen(true)}>
        <img src={googleReview} alt="Google" className="gr-toggle-img" />
        <span className="gr-toggle-text">Reviews</span>
      </button>

      {/* Sidebar */}
      <aside className={`gr-sidebar ${open ? 'open' : ''}`} role="complementary">
        <div className="gr-header">
          <div className="gr-header-left">
            <img src={googleReview} alt="Google" className="gr-logo" />
            <span className="gr-title">Reviews</span>
          </div>
          <button className="gr-close" onClick={() => setOpen(false)}>×</button>
        </div>

        {/* Distribution + Summary */}
        <div className="gr-main-summary">
          <div className="gr-distribution">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = distribution[star];
              const total = Object.values(distribution).reduce((a, b) => a + b, 0);
              const pct = Math.round((count / total) * 100);
              return (
                <div key={star} className="gr-dist-row">
                  <span>{star} ★</span>
                  <div className="gr-dist-bar">
                    <div className="fill" style={{ width: `${pct}%` }} />
                  </div>
                  <span>{count}</span>
                </div>
              );
            })}
          </div>

          <div className="gr-summary">
            <div className="gr-avg">{avg}</div>
            <StarRating rating={avg} />
            <div className="gr-count">{reviews.length} reviews</div>
          </div>
        </div>

        {/* Filters + Sort */}
        <div className="gr-filter-bar">
          <div className="gr-chip-row">
            {chips.map((c) => (
              <button
                key={c}
                className={`gr-chip ${chip === c ? "active" : ""}`}
                onClick={() => setChip(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="gr-sort-row">
            <span className="gr-sort-label">Sort by</span>
            <select
              className="gr-sort-dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {["Most relevant", "Newest", "Highest rating", "Most helpful"].map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Review List */}
        <div className="gr-list">
          {filteredSorted.map((r) => (
            <div className="gr-item" key={r.id}>
              <div className="gr-item-head">
                <div className="gr-avatar">{r.name.charAt(0)}</div>
                <div>
                  <div className="gr-user">{r.name}</div>
                  <div className="gr-date">{r.date}</div>
                </div>
              </div>
              <StarRating rating={r.rating} />
              <p>{r.text}</p>
              <div className="gr-impressions">{r.helpful} people found this helpful</div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
