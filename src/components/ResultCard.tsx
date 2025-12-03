import { ScanResult } from "../types";

interface Props {
  data: ScanResult;
}

export default function ResultCard({ data }: Props) {
  const score = Math.round(data.scamRisk ?? 0);
  const badgeClass =
    score < 35 ? "bg-green-100 text-green-800" :
    score < 65 ? "bg-yellow-100 text-yellow-800" :
    "bg-red-100 text-red-800";

  return (
    <div className="bg-white rounded-xl p-6 shadow-soft">
      <div className="flex gap-6">
        <img src={data.product.image} alt="product" className="w-32 h-32 object-cover rounded-md" />
        <div className="flex-1">
          <h3 className="text-lg font-bold">{data.product.title}</h3>
          <div className="mt-2 text-sm text-gray-600">
            {data.product.seller} • {data.product.price} • ⭐ {data.product.rating}
          </div>
          <div className="mt-4">
            <div className={`inline-flex items-center gap-3 px-3 py-2 rounded ${badgeClass}`}>
              <div className="font-semibold">Scam Risk</div>
              <div className="text-xl">{score}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">AI Reasoning</h4>
        <p className="text-sm text-gray-700">{data.reasoning}</p>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        Tip: Use the alternatives shown for safer options.
      </div>
    </div>
  );
}
