import './startmenu.css'

function MenuApps(props) {
	return (
		<div className='col-2 menuIcon text-center'>
			<span>
				<img src={process.env.PUBLIC_URL + `/img/icon/${props.image}.png`} alt={props.name} height='25px' />
				<br />
				<span>
					{props.name}
				</span>
			</span>
		</div>
	)
}

function RecommendedApp(props) {
	return (
		<div className='col-6 recommendIcon'>
			<div className='row'>
				<div className='col-2 pt-1'>
					<img src={process.env.PUBLIC_URL + `/img/icon/${props.image}.png`} alt={props.name} height='25px' />
				</div>
				<div className='col-10'>
					{props.name}
					<br />
					<span style={{ fontWeight: 500 }}>{props.time}</span>
				</div>
			</div>
		</div>
	)
}

function StartMenu() {
	return (
		<div className='startmenu' id='startmenu'>
			<div className='row startmenuTop'>
				<div className="topBar">
					Pinned
					<span className="rightBtn px-2">
						All apps {">"}
					</span>
				</div>
			</div>
			<div className='row startmenuMiddle'>
				<div className='col-12'>
					<div className='row'>
						<MenuApps image='edge' name='Edge' />
						<MenuApps image='mail' name='Mail' />
						<MenuApps image='calendar' name='Calendar' />
						<MenuApps image='store' name='Store' />
						<MenuApps image='photos' name='Photos' />
						<MenuApps image='settings' name='Settings' />
					</div>
					<div className='row'>
						<MenuApps image='msoffice' name='Office' />
						<MenuApps image='xbox' name='Xbox' />
						<MenuApps image='soltaire' name='Solitaire' />
						<MenuApps image='spotify' name='Spotify' />
						<MenuApps image='teams' name='Teams' />
						<MenuApps image='todo' name='To Do' />
					</div>
					<div className='row'>
						<MenuApps image='powerpoint' name='PowerPoint' />
						<MenuApps image='winWord' name='Word' />
						<MenuApps image='excel' name='Excel' />
						<MenuApps image='paint' name='Paint' />
						<MenuApps image='twitter' name='Twitter' />
						<MenuApps image='oneDrive' name='One Drive' />
					</div>
				</div>
			</div>
			<div className='row startmenuBottomMiddle'>
				<div className="topBar">
					Recommended
				</div>
				<div className='col-12' style={{ paddingLeft: '25px' }}>
					<div className='row'>
						<RecommendedApp image='edge' name='Edge' time='1h ago' />
						<RecommendedApp image='getstarted' name='Get Started' time='Welcome to Windows' />
					</div>
					<div className='row'>
						<RecommendedApp image='notepad' name='Notepad' time='Yesterday 8:53 PM' />
						<RecommendedApp image='code' name='VS Code' time='open recently' />
					</div>
					<div className='row'>
					<RecommendedApp image='win/1085' name='img1' time='5m ago' />
						<RecommendedApp image='win/10' name='Documents' time='3m ago' />
					</div>
				</div>
			</div>
			<div className='row startmenuBottom'>
				<div className='col-12'>
					<span className='user'>
						<img className='userBtn mx-2' src={process.env.PUBLIC_URL + "/img/icon/ui/defAccount.png"} alt="account" />
						Shubham
					</span>
					<img className="powerBtn" src={process.env.PUBLIC_URL + "/img/icon/ui/power.png"} alt="power" />
				</div>
			</div>
		</div>
	)
}

export default StartMenu;