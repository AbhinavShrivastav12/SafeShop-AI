import AnalysisCard from "../ScanComponents/AnalysisCard";

export default function RiskAnalysisReport () {
    return(
        <section className="mb-12">
            <div className="text-center">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    AI-Powered Analysis
                </h2>
                <p className="text-xl text-gray-600">
                    Our AI scans 15+ risk factors in seconds
                </p>
                <div className="max-w-7xl mx-auto mt-12">
                    <AnalysisCard/>
                </div>
            </div>
        </section>
    )
}