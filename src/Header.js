// import React, {Component} from 'react';
// import Preloader from "./Components/Preloader";

// class Header extends Component {
//     render () {
//         return (
//             <div className="hero" id="header">
//                 <div className="title">
//                     <img
//                         src={require("./assets/blackWhite-logo.png")}
//                         className="logo"
//                         alt="Music T.O. Event Logo"
//                     />
//                 </div>

//                 <form action="" className="form">
//                     <label htmlFor="whichGenre"></label>
//                     <select
//                         name="whichGenre"
//                         id="whichGenre"
//                         className="selectBtn"
//                         onChange={this.handleSelectGenreChange}
//                     >
//                         <option value="">Choose a Genre</option>
//                         <option value="KnvZfZ7vAeA">Rock</option>
//                         <option value="KnvZfZ7vAvF">EDM</option>
//                         <option value="KnvZfZ7vAee">R&B</option>
//                         <option value="KnvZfZ7vAv1">Rap</option>
//                         <option value="KnvZfZ7vAvE">Jazz</option>
//                     </select>
//                     <button
//                         className="startBtn"
//                         type="submit"
//                         onClick={this.handleFormSubmit}
//                     >
//                         T.O. the Event
// 						</button>
//                 </form>
//                 {this.state.isLoading ? <Preloader /> : null}
//             </div>

//         )
//     }
// }

// export default Header;