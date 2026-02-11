import { motion as Motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function AnimatedBlock({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.25,
  inView = true,
}) {
  const props = inView
    ? { whileInView: 'visible', viewport: { once, amount } }
    : { animate: 'visible' }

  return (
    <Motion.div
      initial="hidden"
      transition={{ duration: 0.65, delay }}
      variants={fadeUp}
      className={className}
      {...props}
    >
      {children}
    </Motion.div>
  )
}
