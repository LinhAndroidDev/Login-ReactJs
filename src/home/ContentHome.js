import { HiArrowLongLeft } from "react-icons/hi2";
import colors from "../style/colors";

export const ContentHome = () => {
    return (
        <div style={{
            display: 'flex',
            flex: '5',
            height: '100%',
            flexDirection: 'column',
            backgroundColor: 'white',
            borderRadius: '20px',
            alignItems: 'start'
        }}>
            <Top />
        </div>
    );
}

function Top() {
    return (
        <div style={{
            padding: '20px',
            width: '100%',
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
            borderBottomColor: colors.greyDivider,
            display: 'flex',
            alignItems: 'start'
        }}>
            <div style={{ display: 'flex' }}>
                <HiArrowLongLeft style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: colors.greyBg,
                    borderRadius: '10px',
                    padding: '10px'
                }} />


            </div>
        </div>
    );
}