export default function PrescriptionUpload() {
  return (
    <>
      
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-5xl font-bold text-center mb-16 text-dark">Upload Prescription</h1>
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="border-4 border-dashed border-primary rounded-xl p-20 mb-10">
              <p className="text-2xl text-gray-600 mb-6">Drop your prescription here or click to upload</p>
              <input type="file" accept="image/*" className="hidden" id="prescription" />
              <label htmlFor="prescription" className="bg-primary text-white px-12 py-6 rounded-xl text-xl font-bold cursor-pointer hover:bg-green-600 inline-block">
                Choose File
              </label>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Our licensed pharmacist will review your prescription within 30 minutes and confirm your order.
            </p>
            <button className="bg-accent text-white px-16 py-6 rounded-xl text-2xl font-bold hover:bg-orange-600">
              Submit Prescription
            </button>
          </div>
        </div>
      </main>
      
    </>
  )
}