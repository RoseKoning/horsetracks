import React from 'react';
import { useForm } from 'react-hook-form';

export default function Training(){
    const {training, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return(
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="date" name="date" ref={training}/>
                <input type="text" name="duration" placeholder="duration" ref={training}/>
                <label>Satisfaction Rate
                    <select id="satisfactionRate" name="satisfactionRate" ref={training}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <label>Intensity Level
                    <select id="intensity" name="intensity" ref={training}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <label>Riding
                    <input type="checkbox" name="riding" id="riding" value="riding" ref={training}/>
                </label>
                <label>On-line
                    <input type="checkbox" name="online" id="online" value="online" ref={training}/>
                </label>
                <label> Liberty
                    <input type="checkbox" name="liberty" id="liberty" value="liberty" ref={training}/>
                </label>
                <label>Trail Ride
                    <input type="checkbox" name="trailRide" id="trailRide" value="trailRide" ref={training}/>
                </label>
                <label>Work In Hand
                    <input type="checkbox" name="workInHand" id="workInHand" value="workInHand" ref={training}/>
                </label>
                <label>Other
                    <input type="checkbox" name="other" id="other" value="other" ref={training}/>
                </label>
                <textarea placeholder="describe your training session"/>
                <input type="submit"/>
            </form>
    )
}