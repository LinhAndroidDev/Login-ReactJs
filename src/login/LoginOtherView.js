export const LoginOtherView = ({ icon, title }) => {
    return (
        <div style={{
            display: 'flex',
            flex: '1',
            borderRadius: '10px',
            border: '1px solid #D9D9D9',
            alignItems: 'center',
            padding: '4px 12px'
        }}>
            <img src={icon} style={{ width: '24px', height: '24px' }} />
            <p style={{
                fontSize: '12px',
                fontWeight: '500',
                color: 'black',
                marginLeft: '10px'
            }}>{title}</p>
        </div>
    );
}