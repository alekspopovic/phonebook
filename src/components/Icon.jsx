export default function Icon({ src, alt, action, type }) {
  const hoverColors = {
    link: "hover:bg-indigo-200",
    delete: "hover:bg-red-200",
  };

  const image = <img src={src} alt={alt} className="w-8 p-1.5" />;

  const styles = `grow hover:cursor-pointer flex justify-center ${hoverColors[type]}`;

  const handleFunctionAction = () => {
    if (
      type === "delete" &&
      window.confirm("Are you sure you wish to delete this contact?")
    ) {
      action();
    }
  };

  if (typeof action === "function") {
    return (
      <div className={styles} onClick={handleFunctionAction}>
        {image}
      </div>
    );
  } else {
    return (
      <a href={action} className={styles}>
        {image}
      </a>
    );
  }
}
