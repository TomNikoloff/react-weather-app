import { 
    Toggle,
} from './styled';

const ToggleSwitch = ({checked, handleUnitChange}) => {
    return (
        <div>
            <Toggle htmlFor="unit_switcher">
                <input type="checkbox" id="unit_switcher" checked={checked} onChange={handleUnitChange} />
                {(!checked) ? (<span className='celcius'>C</span>) : (<span className='fahrenheit'>F</span>)}
            </Toggle>
        </div>
    )
};

export default ToggleSwitch;