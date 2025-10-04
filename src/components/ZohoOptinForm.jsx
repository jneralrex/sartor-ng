import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ZohoOptinForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://zgnp-zngp.maillist-manage.com/js/optin.min.js';
    script.onload = () => {
      if (window.setupSF) {
        window.setupSF(
          'sf3z05a5285314f3b89b89b26a2bf155c7bbba4f0d62e24d923d64d4389fab34c25d',
          'ZCFORMVIEW',
          false,
          'light',
          false,
          '0'
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Observe success message visibility
  useEffect(() => {
    const successDiv = document.getElementById('Zc_SignupSuccess');
    if (!successDiv) return;

    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (!mutation.target.classList.contains('hidden')) {
          setIsLoading(false); // Hide loader
          toast.success('✅ Thank you for signing up!');
          // Optional: additional logic here
        }
      }
    });

    observer.observe(successDiv, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Observe error message visibility
  useEffect(() => {
    const errorDiv = document.getElementById('errorMsgDiv');
    if (!errorDiv) return;

    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (!mutation.target.classList.contains('hidden')) {
          setIsLoading(false); // Hide loader
          toast.error('❌ Please fix the highlighted errors and try again.');
        }
      }
    });

    observer.observe(errorDiv, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Submit handler to show loader and trigger Zoho submit
  const handleSubmitClick = () => {
    setIsLoading(true);
    // The Zoho script listens to this button ID click event internally to submit the form
    document.getElementById('zcWebOptin')?.click();
  };

  return (
    <div className="bg-gray-100 p-5 md:p-10">
      <div
        id="sf3z05a5285314f3b89b89b26a2bf155c7bbba4f0d62e24d923d64d4389fab34c25d"
        data-type="signupform"
        className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-lg shadow relative"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-indigo-900 mb-4">
            Download Your Free Business Startup Checklist
          </h1>
          <p className="text-gray-600 text-base">
            Fill out the form below to get instant access to your exclusive Business Startup Checklist
          </p>
        </div>

        {/* Success Message */}
        <div
          id="Zc_SignupSuccess"
          className="hidden absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded shadow z-50"
        >
          <div className="flex items-center gap-3 text-sm font-medium">
            <img
              src="https://zgnp-zngp.maillist-manage.com/images/challangeiconenable.jpg"
              alt="Success"
              width="24"
            />
            <span id="signupSuccessMsg">Thank you for Signing Up</span>
          </div>
        </div>

        {/* Form Start */}
        <form
          method="POST"
          id="zcampaignOptinForm"
          action="https://zgnp-zngp.maillist-manage.com/weboptin.zc"
          target="_zcSignup"
        >
          {/* Error Message */}
          <div
            id="errorMsgDiv"
            className="hidden bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded mb-5"
          >
            Please correct the marked field(s) below.
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="EMBED_FORM_NAME_LABEL" className="text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="LASTNAME"
                id="EMBED_FORM_NAME_LABEL"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="EMBED_FORM_EMAIL_LABEL" className="text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="CONTACT_EMAIL"
                id="EMBED_FORM_EMAIL_LABEL"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                required
              />
            </div>
          </div>

          <div className="flex items-start gap-3 mb-7">
            <input
              type="checkbox"
              id="marketing_consent"
              name="marketing_consent"
              className="w-5 h-5 mt-1"
            />
            <label htmlFor="marketing_consent" className="text-sm text-gray-600 leading-relaxed">
              I agree to receive marketing communications and understand that I can unsubscribe at any time.
            </label>
          </div>

          <button
            type="button"
            name="SIGNUP_SUBMIT_BUTTON"
            id="zcWebOptin"
            onClick={handleSubmitClick}
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded text-white text-base font-semibold transition duration-300 ${
              isLoading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Free Checklist Now
              </>
            )}
          </button>

          {/* Hidden fields for Zoho */}
          <input type="hidden" id="fieldBorder" value="" />
          <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
          <input type="hidden" id="emailReportId" name="emailReportId" value="" />
          <input type="hidden" id="formType" name="formType" value="QuickForm" />
          <input type="hidden" name="zx" id="cmpZuid" value="135b0b665" />
          <input type="hidden" name="zcvers" value="3.0" />
          <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
          <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
          <input type="hidden" id="zcld" name="zcld" value="115345f56cd34ae54" />
          <input type="hidden" id="zctd" name="zctd" value="115345f56cd34ab91" />
          <input type="hidden" id="document_domain" value="" />
          <input type="hidden" id="zc_Url" value="zgnp-zngp.maillist-manage.com" />
          <input type="hidden" id="new_optin_response_in" value="1" />
          <input type="hidden" id="duplicate_optin_response_in" value="0" />
          <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
          <input
            type="hidden"
            id="zc_formIx"
            name="zc_formIx"
            value="3z05a5285314f3b89b89b26a2bf155c7bbba4f0d62e24d923d64d4389fab34c25d"
          />
          <input type="hidden" id="viewFrom" value="URL_ACTION" />
          <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">
            1,true,6,Contact Email,2
          </span>
          <span style={{ display: 'none' }} id="dt_FIRSTNAME">
            1,false,1,First Name,2
          </span>
          <span style={{ display: 'none' }} id="dt_LASTNAME">
            1,false,1,Last Name,2
          </span>
        </form>

        <ToastContainer position="top-center" autoClose={5000} />
      </div>
    </div>
  );
};

export default ZohoOptinForm;
