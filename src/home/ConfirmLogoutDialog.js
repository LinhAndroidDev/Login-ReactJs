export const ConfirmLogoutDialog = ({
  showConfirm,
  handleCancel,
  handleConfirm,
}) => {
  return (
    <div>
      {showConfirm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            <p>Bạn có chắc muốn quay lại không?</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={handleCancel}
                style={{ padding: "2px 10px 2px 10px" }}
              >
                Hủy
              </button>
              <button
                onClick={handleConfirm}
                style={{ padding: "2px 10px 2px 10px" }}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
