import { motion } from "framer-motion";

function Logo({ size = 36, animated = false }) {
  const svg = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path
        d="M24 2.309c1.074 0 2.148.274 3.098.822l14.784 8.537c1.9 1.097 3.098 3.157 3.098 5.39v17.884c0 2.233-1.198 4.293-3.098 5.39L27.098 48.87c-.95.548-2.024.822-3.098.822s-2.148-.274-3.098-.822L6.118 40.332c-1.9-1.097-3.098-3.157-3.098-5.39V17.058c0-2.233 1.198-4.293 3.098-5.39L20.902 3.13C21.852 2.583 22.926 2.309 24 2.309z"
        fill="url(#logoGrad)"
      />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fill="#fff"
        fontSize="22"
        fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif"
      >
        B
      </text>
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ display: "grid", placeItems: "center" }}
      >
        {svg}
      </motion.div>
    );
  }

  return svg;
}

export default Logo;
