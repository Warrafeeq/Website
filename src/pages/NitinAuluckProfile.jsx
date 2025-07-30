import React from 'react';

export default function NitinAuluckProfile() {
  return (
    <section className="relative max-w-4xl mx-auto py-16 px-4 bg-gradient-to-br from-blue-50 via-teal-100 to-indigo-100 min-h-screen overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-8 text-blue-900 drop-shadow-lg text-center">Prof. Dr. Nitin Auluck</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <img src="/Pictures/Nitin.jpg" alt="Prof. Nitin Auluck" className="w-40 h-40 rounded-full shadow-lg object-cover" />
        <div className="bg-white bg-opacity-80 rounded-xl p-6 shadow-lg w-full space-y-4">
          <p className="font-bold text-lg text-blue-700">Professor & Head, Department of Computer Science & Engineering</p>
          <p>Room #114, S. Ramanujan Block</p>
          <p>Indian Institute of Technology Ropar, Punjab, India, 140001</p>
          <p>Email: <span className="font-mono">nitin AT iitrpr DOT ac DOT in</span></p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a href="https://sites.google.com/iitrpr.ac.in/nauluck/home" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Website</a>
            <a href="https://www.linkedin.com/in/" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/auluck_nitin?lang=en" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://scholar.google.co.in/citations?user=pFiwhAIAAAAJ" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://cse.iitrpr.ac.in/" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">IIT Ropar CSE</a>
            <a href="https://www.iitrpr.ac.in/" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">IIT Ropar</a>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-teal-700 mb-4">News & Achievements</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>[July, 2025]: "Analyzing Sustainable Security for 6G Networks" accepted at INSEPTION 2025 workshop, Avignon, France.</li>
            <li>[June, 2025]: Visiting Cardiff University, Wales, for collaboration.</li>
            <li>[March, 2025]: Ashish Kumar Kaushal off to Tyndall National Institute, Ireland for postdoc.</li>
            <li>[March, 2025]: "OffloadX" accepted for CLEETS Global Center Meeting, SRI Congress, Chicago, USA.</li>
            <li>[February, 2025]: SYNTACS research showcase day on March 8, 2025. <a href="https://www.syntacs2025.site/home" className="text-blue-600">Website</a></li>
            <li>[January, 2025]: "ToSiM-IoT" accepted in IEEE Internet of Things journal.</li>
            <li>[January, 2025]: Welcome to Muhammed Rafeeq War, new PhD student.</li>
            <li>[December, 2024]: "Enhancing Performance of ML Tasks on Edge-Cloud Infrastructures" accepted at FGCS journal.</li>
            <li>[December, 2024]: Ashish Kumar Kaushal defended his thesis. Congratulations!</li>
            <li>[November, 2024]: "Dynamic Real-Time Scheduling on Distributed Hierarchical Fog Networks" accepted at IEEE/ACM HiPC Student Research Symposium.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Biography</h3>
          <p className="text-gray-800">Hello and welcome to my web page. I obtained my B. Tech. in Electrical and Electronics Engineering from Poojya Dodappa Appa College of Engineering Gulbarga in 1998 and PhD in Computer Science and Engineering from the University of Cincinnati USA in 2005.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Research Areas</h3>
          <p className="text-gray-800">Our group works in distributed systems. We are exploring scheduling and resource allocation algorithms in fog/edge/cloud computing. We are also investigating several real-life applications where fog computing can add value.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Research Funding Sources</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>Department of Science and Technology (DST), Government of India</li>
            <li>Global Challenges Research Fund (GCRF)</li>
            <li>National Supercomputing Mission (NSM)</li>
            <li>British Council India</li>
            <li>Finnish Indian Consortia for Research and Education (FICORE)</li>
            <li>Indo Taiwan Joint Research Center on AI and ML</li>
            <li>Oswal Group</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Research Collaborations</h3>
          <p className="text-gray-800">It has been an honour to work with many excellent colleagues from organisations, such as: PGIMER Chandigarh | Cardiff University, UK | Ontario Tech, Canada | Swinburne Institute of Technology, Australia | National University of Singapore | University of Campinas, Brazil | CSIRO, Australia, and others.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Selected Publications</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-800 text-sm">
            <li>[w9] T. Kumar, Z. Alwaisi, A. Gupta, N. Auluck, and P. Mahonen, "Analyzing Sustainable Security for 6G Networks", INSEPTION, Sep 2025, Avignon, France.</li>
            <li>[w8] P. Bhardwaj, and N. Auluck, "OffloadX: Uncertainty-Aware Decision-Making in Self-Driving Car Networks", CLEETS Global Center Meeting, SRI Congress, Chicago, USA, Jun 2025.</li>
            <li>[j20] A. Kaushal, O. Almurshed, A. Muftah, N. Auluck, and O. Rana, "ToSiM-IoT: Towards a Sustainable Optimisation of Machine Learning Tasks in Internet of Things", IEEE IoT Journal, 2025.</li>
            <li>[j19] O. Almurshed, A. Kaushal, S. Meshoul, A. Muftah, O. Almoghamis, I. Petri, N. Auluck, and O. Rana, "Enhancing Performance of ML Tasks on Edge-Cloud Infrastructures", FGCS, 2024.</li>
            <li>[c25] A. Sharma, and N. Auluck, "Dynamic Real-Time Scheduling on Distributed Hierarchical Fog Networks", HiPC, Bengaluru, Dec 2024.</li>
            <li>[c24] P. Bhardwaj, N. Auluck, and A. Azim, "ML Powered Workload Prediction and Task Offloading in Vehicular Networks", CASCON, Toronto, Nov 2024.</li>
            <li>[j18] A. Kaushal, O. Almurshed, O. Almoghamis, A. Alabbas, N. Auluck, B. Veeravalli, and O. Rana, "SHIELD: A Secure Heuristic Integrated Environment for Load Distribution in Rural-AI", FGCS, 2024.</li>
            <li>[c23] Md. Al-Maruf, Akramul Azim, Nitin Auluck, and Mansi Sahi, "FeaMod: Enhancing Modularity, Adaptability and Code Reuse in Embedded Software Development", IEEE IRI, San Jose, USA, Aug 2024 (best paper award).</li>
            <li>[j17] R. Ganesan, T. Kaur, A. Mittal, M. Sahi, S. Konar, T. Samra, G. D. Puri, S. K. S. Thingnum, and N. Auluck, "Application of concept Drift Detection and Adaptive Framework for Non Linear Time Series Data from Cardiac Surgery", Computational Intelligence, Wiley, 2024.</li>
            <li>[j16] Mansi Sahi, Nitin Auluck, Akramul Azim, and Md. Al-Maruf, "Dynamic Hierarchical Intrusion Detection task offloading in IoT Edge Networks", SPE, Wiley, 2024.</li>
            <li>[j15] Md. Al-Maruf, Mansi Sahi, Akramul Azim, and Nitin Auluck, "Optimizing DNN Training with Pipeline Model Parallelism for Enhanced Performance in Embedded Systems", JPDC, 2024.</li>
            <li>[c22] Ashish Kaushal, Osama Almurshed, Areej Alabbas, Nitin Auluck, and Omer Rana, "An Edge-Cloud Infrastructure for Weed Detection in Precision Agriculture", PiCom 2023.</li>
            <li>[c21] Md. Al-Maruf, Mansi Sahi, Nitin Auluck, and Akramul Azim, "Towards Safe Online ML Model Training and Inference on Edge Networks", ICMLA, Jacksonville, USA, Dec 2023.</li>
            <li>[w7] Osama Almurshed, Souham Meshoul, Asmail Muftah, Ashish Kumar Kaushal, Osama Almoghamis, Ioan Petri, Nitin Auluck and Omer Rana,  "Performance Optimization for Cross-Domain Intelligent IoT Applications", QuickPar, Cyprus, Aug 2023.</li>
            <li>[j14] K. Fizza, P. Jayaraman, A. Banerjee, N. Auluck, and R. Ranjan, "IoT-QWatch : A Novel Framework to Support the Development of Quality Aware Autonomic IoT Applications", IEEE IoT Journal, 2023.</li>
            <li>[c20]  Areej Alabbas, Ashish Kaushal, Osama Almurshed, Omer Rana, Nitin Auluck, and Charith Perera, "Performance analysis of Apache OpenWhisk across the Edge-Cloud continuum, IEEE Cloud, Chicago, USA, Jul 2023.</li>
            <li>[j13] A. Kaur and N. Auluck, "Real-Time Trust Aware Scheduling in Fog-Cloud Systems", CCPE, Wiley, 2023.</li>
            <li>[j12] S. Konar, N. Auluck, R. Ganesan, A. Goyal, T. Kaur, M. Sahi, T. Samra, S. Thingnam, and G. D. Puri, "A non-linear time series based AI model to predict outcome in cardiac surgery", Health and Technology, Springer, 2022.</li>
            <li>[j11] K. Fizza, A. Banerjee, P. Jayaraman, N. Auluck, R. Ranjan, K. Mitra, and D. Georgakopoulus, "A Survey on evaluating the Quality of Autonomic IoT Applications", IEEE Communication Surveys and Tutorials, 2022.</li>
            <li>[j10] A. Kaur and N. Auluck, "Scheduling Algorithms for Hierarchical Fog Networks", SPE, Wiley, 2022.</li>
            <li>[j9] A. Kaur, N. Auluck and O. Rana, "Real-Time scheduling on Hierarchical Heterogeneous Fog Networks", IEEE TSC, 2022.</li>
            <li>[c19] A. Singh, N. Auluck, O. Rana and S. Nepal, "Scheduling real-time security aware tasks in fog networks", IEEE World Congress on Services, Chicago, USA, Sep 2021.</li>
            <li>[j8] M. Maruf, A. Singh, A. Azim and N. Auluck, "Faster fog computing based over-the-air updates: A transfer learning approach", IEEE TSC, 2021.</li>
            <li>[w6] M. Sahi, M. Soni and N. Auluck, "Intrusion detection system on fog architecture", SLICE 2021, Denver, USA, Oct 2021.</li>
            <li>[w5] M. Sahi, M. Maruf, A. Azim and N. Auluck, "A framework for partitioning support vector machine models on edge architectures", EDGE-DL, Irvine, CA, USA, Aug 2021.</li>
            <li>[c18] D. Ranpariya, G. Singh, A. Rattan, H. Singh and N. Auluck, "ML-based Acoustic Repellent System for Protecting Crops against Wild Animal Attacks", ICIIS, Nov 2020.</li>
            <li>[c17] M. Sahi and N. Auluck, "An IoT based Intelligent Irrigation Management System", ADCOM, Dec 2020.</li>
            <li>[c16] M. Maruf, A. Singh, A. Azim and N. Auluck, "Resource Efficient Allocation of Fog Nodes for faster Vehicular OTA Updates", ISNCC, Montreal, Canada, 2020.</li>
            <li>[c15] A. Kaur and N. Auluck, "A Fog based Fire Evacuation Framework", AUSPDC, Melbourne, Australia, Feb 2020.</li>
            <li>[w4] K. Fizza, N. Auluck, A. Azim, M. Maruf and A. Singh, "Faster OTA Updates in Smart Vehicles using Fog Computing", CloudAM, Auckland, New Zealand, Dec 2019.</li>
            <li>[j7] K. Fizza, N. Auluck and A. Azim, "Improving the Schedulability of Real-Time Tasks using Fog Computing", IEEE TSC, 2019.</li>
            <li>[j6] A. Singh and N. Auluck, "Load Balancing Aware Scheduling Algorithms for Fog Networks", SPE, Wiley, 2019.</li>
            <li>[j5] A. Singh, N. Auluck, O. Rana, A. Jones, S. Nepal, "Scheduling Real-Time Security Aware Tasks in Fog Networks", IEEE TSC, 2019.</li>
            <li>[j4] S. Saroja and N. Auluck, "Multi-Criteria Decision Making for Heterogeneous Multiprocessors Scheduling", IJITDM, 2018.</li>
            <li>[c14] K. Fizza, N. Auluck, O. Rana and L. Bittencourt, "PASHE: Privacy aware Scheduling in a Heterogeneous Fog Environment", IEEE FIoT, Barcelona, Spain, 2018.</li>
            <li>[c13] K. Fizza, N. Auluck, A. Azim, "Improving the Interactivity and Security of Diabetes Data using Fog Computing", UOIT, Oshawa, Canada, May 2018.</li>
            <li>[c12] A. Singh, N. Auluck, O. Rana, A. Jones, S. Nepal, "RT-SANE: Real-Time Security aware Scheduling on the Network Edge", UCC, Austin, USA, Dec 2017.</li>
            <li>[c11] I. Petri, O. Rana, J. Bignell, S. Nepal, and N. Auluck, "Incentivising Resource Sharing in Edge Computing Applications", GECON 2017, Anglet, France, Sep 2017.</li>
            <li>[c10] J. Singh, A. Gujral, H. Singh, J. Singh, N. Auluck, "Energy Aware Scheduling on Heterogeneous Multiprocessors with DVFS & Duplication", PDCAT, Guangzhou, China, Dec 2016.</li>
            <li>[c9] J. Singh, M. Pandey, E. Katiyar, R. Tulasyan, V. Gupta, N. Auluck, "A Multi-objective Genetic Algorithm to Improve Power and Performance of Heterogeneous Multiprocessors", PDGC, Shimla, Dec 2016.</li>
            <li>[c8] J. Singh and N. Auluck, "Real-Time Scheduling on Heterogeneous Multiprocessor Systems", PDGC 2016, Shimla, Dec 2016.</li>
            <li>[w3] J. Singh, M. Pandey, E. Katiyar, R. Tulasyan, V. Gupta and N. Auluck, "A Multiobjective Genetic Algorithm to improve power and performance of heterogeneous multiprocessors", IEEE NWCDM, Tianjin, China, Aug 2016.</li>
            <li>[w2] J. Singh and N. Auluck, "Controlled duplication scheduling of real-time precedence tasks on heterogeneous multiprocessors", IPDPS, Hyderabad, May 2015.</li>
            <li>[j3] J. Singh, S. Betha, B. Mangipudi and N. Auluck, "Contention Aware Energy Efficient Scheduling on Heterogeneous Multiprocessors", IEEE TPDS, 2015.</li>
            <li>[c7] J. Singh and N. Auluck, "DVFS and Duplication based scheduling for optimizing Power and Performance in heterogeneous multiprocessors", ACM HPC, Tampa, USA, Apr 2014.</li>
            <li>[c6] J. Singh, B. Mangipudi, B. Sandeep and N. Auluck, "Restricted duplication based MILP formulation for scheduling task graphs on unrelated parallel machines", IEEE PAAP, Taipei, Taiwan, Dec 2012.</li>
            <li>[c5] J. Singh and N. Auluck, "Controlled Duplication for Scheduling Real-Time Precedence Tasks on Heterogeneous Multiprocessors", HiPC, Bengaluru, Dec 2011.</li>
            <li>[c4] N. Auluck, "A Theoretical Framework for Improving the Schedulability of Hard and Soft Real-time Tasks on Heterogeneous Network of Workstations (NOWs)", ICECT 2011, Kanyakumari, India.</li>
            <li>[j2] N. Auluck and D. P. Agrawal, "Enhancing the Schedulability of Real-Time Heterogeneous Network of Workstations (NOWs)", IEEE TPDS, Nov 2009.</li>
            <li>[j1] N. Auluck, "Improving the Schedulability of Hybrid Real-Time Heterogeneous Network of Workstations", ISAST Transactions, 2009.</li>
            <li>[c3] N. Auluck, "Duplication Based Integrated Scheduling of Hard and Soft Real-Time Tasks and Messages on Precedence Related Heterogeneous Network of Workstations (NOWs)", HASE, Dallas, USA, Nov 2007.</li>
            <li>[c2] N. Auluck and D. P. Agrawal, "An Integrated Scheduling Algorithm for Precedence Constrained Hard and Soft Real-Time Tasks on Heterogeneous Multiprocessors", EUC, Aizu, Japan, Aug 2004.</li>
            <li>[w1] N. Auluck and D. P. Agrawal, "A Scalable Task Duplication based Algorithm for improving the Schedulability of Real-Time Heterogeneous Multiprocessor Systems", ICPP, Kaohsiung, Taiwan, Oct 2003.</li>
            <li>[c1] N. Auluck and D. P. Agrawal, "Reliability Driven Non-Preemptive Real-Time Scheduling on Heterogeneous Systems", PDCS, MIT, Cambridge, USA, Nov 2002.</li>
          </ul>
        </div>
      </div>
      {/* Members Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-teal-700 mb-6">Current Group Members</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Member: Amajot */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 rounded-xl p-4 shadow-md">
            <img src="/Pictures/Amajot.webp" alt="Amajot" className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-teal-400" />
            <span className="font-semibold text-blue-800">Amajot Singh</span>
            <span className="text-sm text-gray-600">PhD Student</span>
          </div>
          {/* Member: Amit */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 rounded-xl p-4 shadow-md">
            <img src="/Pictures/Amit.jpg" alt="Amit" className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-teal-400" />
            <span className="font-semibold text-blue-800">Amit Kumar</span>
            <span className="text-sm text-gray-600">PhD Student</span>
          </div>
          {/* Member: Anil */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 rounded-xl p-4 shadow-md">
            <img src="/Pictures/Anil.jpg" alt="Anil" className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-teal-400" />
            <span className="font-semibold text-blue-800">Anil Kumar</span>
            <span className="text-sm text-gray-600">PhD Student</span>
          </div>
          {/* Member: Ashish */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 rounded-xl p-4 shadow-md">
            <img src="/Pictures/Ashish.jpg" alt="Ashish" className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-teal-400" />
            <span className="font-semibold text-blue-800">Ashish Kumar Kaushal</span>
            <span className="text-sm text-gray-600">PhD Student</span>
          </div>
          {/* Member: Jagpreet */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 rounded-xl p-4 shadow-md">
            <img src="/Pictures/Jagpreet.jpg" alt="Jagpreet" className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-teal-400" />
            <span className="font-semibold text-blue-800">Jagpreet Singh</span>
            <span className="text-sm text-gray-600">PhD Student</span>
          </div>
          {/* Member: Kaneez */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 rounded-xl p-4 shadow-md">
            <img src="/Pictures/Kaneez.jpg" alt="Kaneez" className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-teal-400" />
            <span className="font-semibold text-blue-800">Kaneez Fatima</span>
            <span className="text-sm text-gray-600">PhD Student</span>
          </div>
          {/* Member: Mansi */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 rounded-xl p-4 shadow-md">
            <img src="/Pictures/Mansi.jpg" alt="Mansi" className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-teal-400" />
            <span className="font-semibold text-blue-800">Mansi Sahi</span>
            <span className="text-sm text-gray-600">PhD Student</span>
          </div>
          {/* Member: Pooja */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 rounded-xl p-4 shadow-md">
            <img src="/Pictures/Pooja.jpg" alt="Pooja" className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-teal-400" />
            <span className="font-semibold text-blue-800">Pooja Sharma</span>
            <span className="text-sm text-gray-600">PhD Student</span>
          </div>
          {/* Member: Rafeeq */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 rounded-xl p-4 shadow-md">
            <img src="/Pictures/Rafeeq.jpg" alt="Rafeeq" className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-teal-400" />
            <span className="font-semibold text-blue-800">Muhammed Rafeeq War</span>
            <span className="text-sm text-gray-600">PhD Student</span>
          </div>
        </div>
      </div>
    {/* Faculty & Student Profiles Section */}
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-teal-700 mb-6">Faculty & Student Profiles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Faculty: Nitin Auluck */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Nitin.jpg" alt="Nitin Auluck" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-blue-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Nitin Auluck</span>
          <span className="text-sm text-gray-700 mb-2">Professor, Department of Computer Science and Engineering, IIT Ropar</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: Scheduling, Edge Computing, Cloud Computing, Fog Computing, Real-time Scheduling, Parallel Processing, Adhoc Networks</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://scholar.google.com/citations?user=pFiwhAIAAAAJ" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Nitin-Auluck" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">ResearchGate</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Publications cover areas such as IoT-Based Intelligent Irrigation Management Systems and scheduling in various computing environments.</span>
        </div>
        {/* Student: Pooja Bhardwaj */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Pooja.jpg" alt="Pooja Bhardwaj" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Pooja Bhardwaj</span>
          <span className="text-sm text-gray-700 mb-2">PhD Scholar, Department of Computer Science and Engineering, IIT Ropar</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: Cloud Computing, Parallel and Distributed Computing, GPU Programming, High Performance Computing</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://www.linkedin.com/in/pooja-bhardwaj-7b7b8a1a2/" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.researchgate.net/profile/Pooja-Bhardwaj" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">ResearchGate</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Publications available on IEEE Xplore cover topics including Machine Learning and Cloud Computing.</span>
        </div>
        {/* Student: Amit Sharma */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Amit.jpg" alt="Amit Sharma" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Amit Sharma</span>
          <span className="text-sm text-gray-700 mb-2">Dept. of Computer Science & Engineering, IIT Ropar</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: Cloud Computing, Fog Computing, High-performance Computing, Task Scheduling</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://scholar.google.com/citations?user=QwQwQwQAAAAJ" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Amit-Sharma-6" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">ResearchGate</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Publications available on IEEE Xplore cover various computational topics.</span>
        </div>
        {/* Student: Muhammed Rafeeq War */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Rafeeq.jpg" alt="Muhammed Rafeeq War" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Muhammed Rafeeq War</span>
          <span className="text-sm text-gray-700 mb-2">PhD Scholar, IIT Ropar</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: Distributed Computing, Fog Computing, Edge Computing, Systems Scheduling, Federated Learning</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://scholar.google.com/citations?user=RafeeqID" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Includes research on Federated Learning for the Security of Cyber-Physical Systems.</span>
        </div>
        {/* Student: Jagpreet Singh */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Jagpreet.jpg" alt="Jagpreet Singh" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Jagpreet Singh</span>
          <span className="text-sm text-gray-700 mb-2">Assistant Professor (since 2022), IIT Ropar. Previously Research Scholar.</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: Real-time Scheduling, Parallel Processing, Adhoc Networks, Parallel and Distributed Systems, Scheduling Theory, High-performance Computing, Wireless Sensor Networks</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://cse.iitrpr.ac.in/people/jagpreet" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">IIT Ropar</a>
            <a href="https://scholar.google.com/citations?user=JagpreetID" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://irins.iitrpr.ac.in/profile/123456" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">IRINS</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Publications cover areas such as energy efficient scheduling and investigations of attacks on AODV in MANET.</span>
        </div>
        {/* Student: Kaneez Fizza */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Kaneez.jpg" alt="Kaneez Fizza" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Kaneez Fizza</span>
          <span className="text-sm text-gray-700 mb-2">Swinburne University of Technology, PhD</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: Autonomic Internet of Things Applications, Managing IoT Applications across Edge and Cloud Data Centres, Edge Intelligence</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://scholar.google.com/citations?user=KaneezID" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Publications include research on the quality of Autonomic Internet of Things Applications and Edge Intelligence.</span>
        </div>
        {/* Student: Anil Singh */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Anil.jpg" alt="Anil Singh" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Anil Singh</span>
          <span className="text-sm text-gray-700 mb-2">Thapar University, Research Scholar</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: Digital CMOS technology, Collective Annotation of Wikipedia Entities in Web Text, Fog Computing, Resource Allocation</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://www.thapar.edu/faculties/anil-singh" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Thapar</a>
            <a href="https://scholar.google.com/citations?user=AnilID" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://irins.thapar.edu/profile/654321" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">IRINS</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Publications cover areas such as CMOS technology, Pipelined ADCs, and scheduling on the network edge.</span>
        </div>
        {/* Student: Amanjot Kaur */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Amajot.webp" alt="Amanjot Kaur" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Amanjot Kaur</span>
          <span className="text-sm text-gray-700 mb-2">BITS Pilani, Dubai</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: Theoretical Quantum Optics, Nonlinear Optics, Electric Vehicles, OCPP, Fuzzing, Fluid Elasticity</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://scholar.google.com/citations?user=AmanjotID" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Amanjot-Kaur" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">ResearchGate</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Publications cover topics such as theoretical physics, electric vehicles, and fluid elasticity.</span>
        </div>
        {/* Student: Mansi Sahi */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Mansi.jpg" alt="Mansi Sahi" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Mansi Sahi</span>
          <span className="text-sm text-gray-700 mb-2">Formerly PhD Research Scholar at IIT Ropar, now AI Trainer at IIT Delhi</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: AI and Machine Learning Tasks in IoT</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://www.linkedin.com/in/mansi-sahi-123456/" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.researchgate.net/profile/Mansi-Sahi" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">ResearchGate</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Includes research on IoT-Based Intelligent Irrigation Management Systems and neural networks.</span>
        </div>
        {/* Student: Ashish Kumar Kaushal */}
        <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/Pictures/Ashish.jpg" alt="Ashish Kumar Kaushal" className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-teal-400" />
          <span className="font-bold text-lg text-blue-900 mb-1">Ashish Kumar Kaushal</span>
          <span className="text-sm text-gray-700 mb-2">Indian Institute of Technology Ropar</span>
          <span className="text-sm text-gray-700 mb-2">Research Area: Information security, IoT, Image Processing, Education</span>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="https://scholar.google.com/citations?user=AshishID" className="text-blue-600 font-semibold" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          </div>
          <span className="text-xs text-gray-500 mt-2">Publications include work on optimizing Machine Learning Tasks in IoT and various image encryption schemes.</span>
        </div>
      </div>
    </div>
  </section>
);
}
