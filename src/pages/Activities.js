function Activities() {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold uppercase mb-4">Extra-Curricular Activities</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">Associate Member</h3>
            <p>DIU Computer & Programming Club</p>
            <p>08/2022 – present</p>
          </div>
          <div>
            <h3 className="font-bold">Competitive Programmer</h3>
            <p>Solved 500+ Problems in various online judges</p>
            <p>Profile-Link:</p>
            <ol className="list-decimal ml-5">
              <li><a href="https://codeforces.com/profile/Lord_AK" target="_blank" rel="noopener noreferrer" className="underline">Codeforces</a></li>
              <li><a href="https://judge.beecrowd.com.en/profile/635824" target="_blank" rel="noopener noreferrer" className="underline">Beecrowd</a></li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold">Languages</h3>
            <ul className="list-disc ml-5">
              <li>English: Full Professional proficiency</li>
              <li>Bangla: Native speaker</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Activities;