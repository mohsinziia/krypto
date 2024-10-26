function Container({ className, children, ...props }) {
  return <div className={`w-[106.5rem] m-auto ${className}`}>{children}</div>;
}

export default Container;
