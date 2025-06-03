// pages/cos-applications.js (or pages/index.js if this is your main page)
import Head from 'next/head'; // Import Head for title and meta tags

const CoSApplications = () => {
  // Dummy data based on your screenshot
  const applications = [
    {
      grantedDate: '25/03/2025',
      requestNumber: 'DCS04847615',
      useByDate: '25/06/2025',
      submittedBy: 'POHRIB, GHEORGHIITA (pk2boiV3ar)',
      route: 'Skilled Worker (New hires - defined)',
      jobType: '5316 Carpenters and joiners',
      numberGranted: 2,
      applicationStatus: 'GRANTED',
    },
  ];

  return (
    <>
      <Head>
        <title>Defined CoS Applications</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* You can add more meta tags here if needed */}
      </Head>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8"> {/* Full screen height, light gray background, flexbox for centering, responsive padding */}
        <div className="bg-white p-5 rounded-md shadow-lg max-w-6xl w-full"> {/* White background, padding, rounded corners, larger shadow, max width, full width */}
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Defined CoS applications</h2> {/* Larger heading, bold font */}

          <div className="mb-6 text-sm text-gray-700 leading-relaxed space-y-2"> {/* Increased margin bottom, slightly larger space between paragraphs */}
            <p>• All applications made that have been granted and are still valid; and</p>
            <p>• All applications granted, but where some or all of the defined CoS have been reclaimed or returned.</p>
            <p className="mt-4">Where the status is shown as <strong className="font-bold">Granted</strong> you can select the application to create and assign defined CoS.</p>
            <p>You cannot create and assign CoS that have been reclaimed or returned.</p>
            <p className="mt-4">Choose <strong className="font-bold">Next</strong> to continue or choose <strong className="font-bold">Back</strong> to return to the previous screen.</p>
          </div>

          <div className="overflow-x-auto border border-gray-300 rounded-md"> {/* Added rounded border to the table container */}
            <table className="min-w-full divide-y divide-gray-200"> {/* Full width, row dividers */}
              <thead className="bg-gray-50"> {/* Very light gray background for header */}
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"></th> {/* Empty header for radio button */}
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Granted date</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Request Number</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Use by date</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Submitted by</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Route</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Job type</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Number of CoS granted</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Application status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200"> {/* White background, row dividers */}
                {applications.map((app, index) => (
                  <tr key={index} className="hover:bg-gray-50"> {/* Add hover effect for rows */}
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">
                      <input type="radio" name="selectedApp" className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" /> {/* Radio button styling */}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{app.grantedDate}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{app.requestNumber}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{app.useByDate}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{app.submittedBy}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{app.route}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{app.jobType}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{app.numberGranted}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-800">{app.applicationStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-right mt-6"> {/* Increased margin top */}
            <button className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"> {/* More prominent button style */}
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoSApplications;