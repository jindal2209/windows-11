import { useEffect, useState } from 'react'
import './taskbar.css'

function TaskBarIcon(props) {
	return (
		<span className='taskbar-icon py-2'>
			<img src={props.src} alt={props.alt} height='23px' width='23px' />
		</span>
	)
}

function Taskbar() {
	var [startMenuVisible, setStartMenuVisible] = useState(false)
	var [notificationMenuVisible, setNotificationMenuVisible] = useState(false)
	var [time, setTime] = useState(new Date())

	function handleStartMenuShow() {
		if (startMenuVisible) {
			document.getElementById('startmenu').style.bottom = "-100%"
			setStartMenuVisible(false)
		}
		else {
			document.getElementById('startmenu').style.bottom = "50px"
			setStartMenuVisible(true)
		}
	}

	function handleSideNotificationShow() {
		if (notificationMenuVisible) {
			document.getElementById('notificationMenu').style.right = "-100%"
			setNotificationMenuVisible(false)
		}
		else {
			document.getElementById('notificationMenu').style.right = "0"
			setNotificationMenuVisible(true)
		}
	}

	function formatHHMM(date) {
		function z(n) { return (n < 10 ? '0' : '') + n; }
		var h = date.getHours();
		var hr = h % 12
		return z(hr === 0 ? 12 : hr) + ':' + z(date.getMinutes()) + ' ' + (h < 12 ? 'AM' : 'PM');
	}


	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000)
	})

	return (
		<div className='container-fluid taskbar'>
			<div className='row' style={{ flex: 1, alignSelf: 'stretch' }}>
				<div className='col-3'>
				</div>
				<div className='text-center col-6 d-flex justify-content-center align-items-center'>
					<span className='taskbar-icon py-2' onClick={() => handleStartMenuShow()}>
						<img src={process.env.PUBLIC_URL + "/img/icon/home.png"} alt="start" height='23px' width='23px' />
					</span>
					<TaskBarIcon src={process.env.PUBLIC_URL + "/img/icon/search.png"} alt="search" />
					<TaskBarIcon src={process.env.PUBLIC_URL + "/img/icon/widget.png"} alt="widget" />
					<TaskBarIcon src={process.env.PUBLIC_URL + "/img/icon/explorer.png"} alt="explorer" />
					<TaskBarIcon src={process.env.PUBLIC_URL + "/img/icon/settings.png"} alt="settings" />
					<TaskBarIcon src={process.env.PUBLIC_URL + "/img/icon/edge.png"} alt="edge" />
					<TaskBarIcon src={process.env.PUBLIC_URL + "/img/icon/store.png"} alt="store" />
					<TaskBarIcon src={process.env.PUBLIC_URL + "/img/icon/code.png"} alt="code" />
				</div>
				<div className='col-3 text-center d-flex justify-content-center align-items-center'>
					<div className='row' style={{ flex: 1, alignSelf: 'stretch' }}>
						<div className='col-1'></div>
						<div className='col-1'></div>
						<div className='col-1'></div>
						<div className='col-1'></div>

						<div className='col-1 date-time px-1'>
							<img className='notificationBtn' src={process.env.PUBLIC_URL + "/img/icon/ui/arrow.png"} alt="arrow" />
						</div>
						<div className='col-1 date-time'>
							<img className='notificationBtn' src={process.env.PUBLIC_URL + "/img/icon/ui/battery.png"} alt="battery" />
						</div>
						<div className='col-1 date-time'>
							<img className='notificationBtn' src={process.env.PUBLIC_URL + "/img/icon/ui/wifi.png"} alt="wifi" />
						</div>
						<div className='col-1 date-time'>
							<img className='notificationBtn' src={process.env.PUBLIC_URL + "/img/icon/ui/audio.png"} alt="audio" />
						</div>
						<div className='col-2 date-time'>
							{formatHHMM(time)}
							<br />
							{time.toLocaleDateString()}
						</div>
						<div className='col-1 date-time' onClick={() => handleSideNotificationShow()}>
							<img className='notificationBtn' src={process.env.PUBLIC_URL + "/img/icon/ui/sidepane.png"} alt="start" />
						</div>
						<div className='date-time px-1' style={{ paddingRight: '5px', width: 'max-content' }}><span className='showDesktop'></span></div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Taskbar;