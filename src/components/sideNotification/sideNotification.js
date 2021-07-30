import { useState } from 'react'
import './sideNotification.css'

function SideIcon(props) {
	return (
		<span className='sideIconSpan'>
			<input className='checkbox' type='checkbox' id={`check${props.name}`} name={`check${props.name}`} />
			<label className='sideIcon' htmlFor={`check${props.name}`}>
				<img src={process.env.PUBLIC_URL + `/img/icon/ui/${props.src}.png`} alt={props.name} height='15px' />
				<br />
				<span>
					{props.name}
				</span>
			</label>
		</span>
	)
}

function SideNotification() {
	var [nightMode, setNightMode] = useState(false)
	function handleNightMode() {
		if (nightMode === true) {
			document.body.style.opacity = '1'
			document.body.style.transition = '0'
			setNightMode(false)
		}
		else {
			document.body.style.opacity = '0.5'
			document.body.style.transition = '1s'
			setNightMode(true)
		}
	}

	return (
		<div className='notificationMenu' id='notificationMenu'>
			<div className='nightModeOverlay'></div>
			<div className='row'>
				<div className='col-12' style={{ textAlign: 'right', fontSize: '12px' }}>
					Manage Notifications
				</div>
			</div>
			<div className='row'>
				<div className='col-12' style={{ textAlign: 'center', fontSize: '12px' }}>
					No new notifications
				</div>
			</div>
			<div className='row notificationBtns'>
				<div className='col-12'>
					<div className='row d-flex justify-content-center align-items-center'>
						<SideIcon name="Location" src='location' />
						<SideIcon name="Battery Saver" src='saver' />
						<SideIcon name="Bluetooth" src='bluetooth' />
						<span className='sideIconSpan'>
							<input className='checkbox' onClick={() => handleNightMode()} type='checkbox' id={`checkNight Light`} name={`checkNight Light`} />
							<label className='sideIcon' htmlFor={`checkNight Light`}>
								<img src={process.env.PUBLIC_URL + `/img/icon/ui/nightlight.png`} alt={`checkNight Light`} height='15px' />
								<br />
								<span>
									{`Night Light`}
								</span>
							</label>
						</span>
						{/* <SideIcon name="Night Light" src='nightlight' onClick={handleNightMode} /> */}
					</div>
					<div className='row d-flex justify-content-center align-items-center'>
						<SideIcon name="Airplane" src='airplane' />
						<SideIcon name="Nearby" src='nearshare' />
						<SideIcon name="All Settings" src='settingsDark' />
						<SideIcon name="Priority Only" src='moon' />
					</div>
					<div className='row d-flex justify-content-center align-items-center'>
						<SideIcon name="Network" src='network' />
						<SideIcon name="Connect" src='connect' />
						<SideIcon name="Project" src='project' />
						<SideIcon name="Tablet Mode" src='tablet' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideNotification