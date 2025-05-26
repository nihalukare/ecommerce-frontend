import { useProductContext } from "../context/ProductProvider";

export default function Toasts() {
  const { toasts, removeToast } = useProductContext();
  return (
    <div
      className="position-fixed top-0 start-50 translate-middle-x p-5"
      style={{ zIndex: "1055" }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast align-items-center text-bg-${toast.type} border-0 show mb-2`}
          role="alert"
        >
          <div className="d-flex">
            <div className="toast-body">{toast.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              onClick={() => {
                removeToast(toast.id);
              }}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
}
