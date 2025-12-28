import React from "react";
const PlanCard = ({ name, price, popular, features ,onSubscribe}) => {
  return (
    <div className="card w-96 bg-base-300 shadow-sm">
      <div className="card-body">
        {popular ? (
          <span className="badge badge-xs badge-warning">Most Popular</span>
        ) : (
          <span></span>
        )}

        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{name}</h2>
          <span className="text-xl">{price}</span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index} className={!feature.available ? "opacity-50" : ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-4 me-2 inline-block ${
                  feature.available ? "text-success" : "text-base-content/50"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className={!feature.available ? "line-through" : ""}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button className="btn btn-primary btn-block" onClick={()=>onSubscribe(name)}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
