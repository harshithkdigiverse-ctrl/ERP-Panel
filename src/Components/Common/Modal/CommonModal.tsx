import { useEffect, useRef, type FC } from "react";
import type { CommonModalProps } from "../../../Types";

const CommonModal: FC<CommonModalProps> = ({ isOpen, onClose, children, className, showCloseButton = true, isFullscreen = false, title, subTitle }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const contentClasses = isFullscreen ? "w-full h-full" : "relative w-full rounded-xl bg-white dark:bg-gray-900";

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto modal z-999">
      {!isFullscreen && <div className="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-none" onClick={onClose}></div>}
      <div ref={modalRef} className={`${contentClasses} ${className} px-3 py-4 sm:p-5 m-2 sm:m-5`} onClick={(e) => e.stopPropagation()}>
        {showCloseButton && (
          <button onClick={onClose} className="absolute right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:-right-4 sm:-top-4 sm:h-11 sm:w-11">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z" fill="currentColor" />
            </svg>
          </button>
        )}
        <div>
          {(title || subTitle) && (
            <div className={`px-2 pr-8 sm:pr-14 pb-3 mb-3 lg:mb-4 ${title || subTitle ? " border-b border-gray-200 dark:border-gray-800" : ""} `}>
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white/90 capitalize">{title}</h4>
              {subTitle && <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{subTitle}</p>}
            </div>
          )}
          <div className="max-h-155! overflow-y-auto custom-scrollbar">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
