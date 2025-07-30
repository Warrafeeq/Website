import React from 'react';

export default function Publications() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Publications</h2>
      <div className="space-y-6">
        {/* Highly Cited Publications */}
        <div className="bg-blue-50 rounded-lg shadow p-4 border-l-4 border-blue-400">
          <h3 className="font-semibold">Improving the schedulability of real-time tasks using fog computing</h3>
          <p className="text-sm mb-1">K Fizza, N Auluck, A Azim</p>
          <p className="text-xs text-gray-600 mb-1">IEEE Transactions on Services Computing 15 (1), 372-385</p>
          <p className="text-xs text-gray-500">Cited by 106 | 2019</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-4 border-l-4 border-blue-400">
          <h3 className="font-semibold">Scheduling real-time security aware tasks in fog networks</h3>
          <p className="text-sm mb-1">A Singh, N Auluck, O Rana, A Jones, S Nepal</p>
          <p className="text-xs text-gray-600 mb-1">IEEE Transactions on Services Computing 14 (6), 1981-1994</p>
          <p className="text-xs text-gray-500">Cited by 65 | 2019</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-4 border-l-4 border-blue-400">
          <h3 className="font-semibold">Contention aware energy efficient scheduling on heterogeneous multiprocessors</h3>
          <p className="text-sm mb-1">J Singh, S Betha, B Mangipudi, N Auluck</p>
          <p className="text-xs text-gray-600 mb-1">IEEE Transactions on Parallel and Distributed Systems 26 (5), 1251-1264</p>
          <p className="text-xs text-gray-500">Cited by 50 | 2014</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-4 border-l-4 border-blue-400">
          <h3 className="font-semibold">A survey on evaluating the quality of autonomic internet of things applications</h3>
          <p className="text-sm mb-1">K Fizza, A Banerjee, PP Jayaraman, N Auluck, R Ranjan, K Mitra, ...</p>
          <p className="text-xs text-gray-600 mb-1">IEEE Communications Surveys & Tutorials 25 (1), 567-590</p>
          <p className="text-xs text-gray-500">Cited by 40 | 2022</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-4 border-l-4 border-blue-400">
          <h3 className="font-semibold">RT-SANE Real Time Security Aware Scheduling on the Network Edge</h3>
          <p className="text-sm mb-1">A Singh, N Auluck, O Rana, A Jones, S Nepal</p>
          <p className="text-xs text-gray-600 mb-1">Proceedings of the10th International Conference on Utility and Cloud …</p>
          <p className="text-xs text-gray-500">Cited by 40 | 2017</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-4 border-l-4 border-blue-400">
          <h3 className="font-semibold">Load balancing aware scheduling algorithms for fog networks</h3>
          <p className="text-sm mb-1">A Singh, N Auluck</p>
          <p className="text-xs text-gray-600 mb-1">Software: Practice and Experience 50 (11), 2012-2030</p>
          <p className="text-xs text-gray-500">Cited by 30 | 2020</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-4 border-l-4 border-blue-400">
          <h3 className="font-semibold">Faster ota updates in smart vehicles using fog computing</h3>
          <p className="text-sm mb-1">K Fizza, N Auluck, A Azim, MA Maruf, A Singh</p>
          <p className="text-xs text-gray-600 mb-1">Proceedings of the 12th IEEE/ACM International Conference on Utility and …</p>
          <p className="text-xs text-gray-500">Cited by 27 | 2019</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-4 border-l-4 border-blue-400">
          <h3 className="font-semibold">IoT-QWatch: A novel framework to support the development of quality-aware autonomic IoT applications</h3>
          <p className="text-sm mb-1">K Fizza, PP Jayaraman, A Banerjee, N Auluck, R Ranjan</p>
          <p className="text-xs text-gray-600 mb-1">IEEE Internet of Things Journal 10 (20), 17666-17679</p>
          <p className="text-xs text-gray-500">Cited by 22 | 2023</p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-4 border-l-4 border-blue-400">
          <h3 className="font-semibold">Faster fog computing based over-the-air vehicular updates: A transfer learning approach</h3>
          <p className="text-sm mb-1">M Al Maruf, A Singh, A Azim, N Auluck</p>
          <p className="text-xs text-gray-600 mb-1">IEEE Transactions on Services Computing 15 (6), 3245-3259</p>
          <p className="text-xs text-gray-500">Cited by 22 | 2021</p>
        </div>
        {/* ...add remaining publications in similar format... */}
        {/* Publications List - Faculty & Students */}
        {/* Example: [w9] T. Kumar, Z. Alwaisi, A. Gupta, N. Auluck, and P. Mahonen, "Analyzing Sustainable Security for 6G Networks", INSEPTION, Sep 2025, Avignon, France. */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Analyzing Sustainable Security for 6G Networks</h3>
          <p className="text-sm mb-1">T. Kumar, Z. Alwaisi, A. Gupta, N. Auluck, P. Mahonen</p>
          <p className="text-xs text-gray-600 mb-2">INSEPTION, Sep 2025, Avignon, France</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">OffloadX: Uncertainty-Aware Decision-Making in Self-Driving Car Networks</h3>
          <p className="text-sm mb-1">P. Bhardwaj, N. Auluck</p>
          <p className="text-xs text-gray-600 mb-2">CLEETS Global Center Meeting, SRI Congress, Chicago, USA, Jun 2025</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">ToSiM-IoT: Towards a Sustainable Optimisation of Machine Learning Tasks in Internet of Things</h3>
          <p className="text-sm mb-1">A. Kaushal, O. Almurshed, A. Muftah, N. Auluck, O. Rana</p>
          <p className="text-xs text-gray-600 mb-2">IEEE IoT Journal, 2025</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Enhancing Performance of ML Tasks on Edge-Cloud Infrastructures</h3>
          <p className="text-sm mb-1">O. Almurshed, A. Kaushal, S. Meshoul, A. Muftah, O. Almoghamis, I. Petri, N. Auluck, O. Rana</p>
          <p className="text-xs text-gray-600 mb-2">FGCS, 2024</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Dynamic Real-Time Scheduling on Distributed Hierarchical Fog Networks</h3>
          <p className="text-sm mb-1">A. Sharma, N. Auluck</p>
          <p className="text-xs text-gray-600 mb-2">HiPC, Bengaluru, Dec 2024</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">ML Powered Workload Prediction and Task Offloading in Vehicular Networks</h3>
          <p className="text-sm mb-1">P. Bhardwaj, N. Auluck, A. Azim</p>
          <p className="text-xs text-gray-600 mb-2">CASCON, Toronto, Nov 2024</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">SHIELD: A Secure Heuristic Integrated Environment for Load Distribution in Rural-AI</h3>
          <p className="text-sm mb-1">A. Kaushal, O. Almurshed, O. Almoghamis, A. Alabbas, N. Auluck, B. Veeravalli, O. Rana</p>
          <p className="text-xs text-gray-600 mb-2">FGCS, 2024</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">FeaMod: Enhancing Modularity, Adaptability and Code Reuse in Embedded Software Development</h3>
          <p className="text-sm mb-1">Md. Al-Maruf, Akramul Azim, Nitin Auluck, Mansi Sahi</p>
          <p className="text-xs text-gray-600 mb-2">IEEE IRI, San Jose, USA, Aug 2024 (best paper award)</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Application of concept Drift Detection and Adaptive Framework for Non Linear Time Series Data from Cardiac Surgery</h3>
          <p className="text-sm mb-1">R. Ganesan, T. Kaur, A. Mittal, M. Sahi, S. Konar, T. Samra, G. D. Puri, S. K. S. Thingnum, N. Auluck</p>
          <p className="text-xs text-gray-600 mb-2">Computational Intelligence, Wiley, 2024</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Dynamic Hierarchical Intrusion Detection task offloading in IoT Edge Networks</h3>
          <p className="text-sm mb-1">Mansi Sahi, Nitin Auluck, Akramul Azim, Md. Al-Maruf</p>
          <p className="text-xs text-gray-600 mb-2">SPE, Wiley, 2024</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Optimizing DNN Training with Pipeline Model Parallelism for Enhanced Performance in Embedded Systems</h3>
          <p className="text-sm mb-1">Md. Al-Maruf, Mansi Sahi, Akramul Azim, Nitin Auluck</p>
          <p className="text-xs text-gray-600 mb-2">JPDC, 2024</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">An Edge-Cloud Infrastructure for Weed Detection in Precision Agriculture</h3>
          <p className="text-sm mb-1">Ashish Kaushal, Osama Almurshed, Areej Alabbas, Nitin Auluck, Omer Rana</p>
          <p className="text-xs text-gray-600 mb-2">PiCom 2023</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Towards Safe Online ML Model Training and Inference on Edge Networks</h3>
          <p className="text-sm mb-1">Md. Al-Maruf, Mansi Sahi, Nitin Auluck, Akramul Azim</p>
          <p className="text-xs text-gray-600 mb-2">ICMLA, Jacksonville, USA, Dec 2023</p>
        </div>
        {/* Add more publication cards as needed from the provided list */}
      </div>
    </section>
  );
}
