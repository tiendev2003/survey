import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Wrapper from "../component/email/Wrapper";
import Layout from "../component/home/Layout";
import { AuthContext } from "../context/AuthContext";
import useMenu from "../hooks/useMenu";
function Profile() {
  const {userInformation,updateUserInformation} = useContext(AuthContext);
   useMenu();
  const [formData, setFormData] = useState({
    name: userInformation.name,
    email: userInformation.email,
    phone: userInformation.phone,
    password: "", // Add password field
  });

  useEffect(() => {
    setFormData({
      name: userInformation.username,
      email: userInformation.email,
      phone: userInformation.phone,
      password: "", // Add password field
    });
  }, [userInformation]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserInformation(formData);
      toast.success("Update successfully");
    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }

  }
  return (
    <Layout>
      <Wrapper>
        <div className="container-fluid p-0 mt-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <div className="crancy-ptabs__separate">
                  <div className="crancy-ptabs__form-main">
                    <div className="crancy__item-group">
                      <h4 className="crancy__item-group__title">
                        Update Parsonal Info
                      </h4>
                      <div className="crancy__item-form--group mg-top-form-20">
                        <label className="crancy__item-label">Name</label>
                        <input
                          className="crancy__item-input"
                          type="text"
                          placeholder="demo3243@gmail.com"
                          required="required"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>

                      <div className="crancy__item-form--group mg-top-form-20">
                        <label className="crancy__item-label">
                          Email Address
                        </label>
                        <input
                          className="crancy__item-input"
                          type="email"
                          placeholder="demo3243@gmail.com"
                          required="required"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="crancy__item-form--group mg-top-form-20">
                        <label className="crancy__item-label">
                          Số điện thoại{" "}
                        </label>
                        <input
                          className="crancy__item-input"
                          type="text"
                          placeholder="demo3243@gmail.com"
                      
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div className="crancy__item-form--group mg-top-form-20">
                        <label className="crancy__item-label">Password</label>
                        <input
                          className="crancy__item-input"
                          type="text"
                          placeholder="Enter new password"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="crancy__item-button--group crancy__item-button--group--fix crancy__ptabs-bottom">
              <button className="crancy-btn crancy-btn__nostyle crancy-color4 p-0">
                Cancel
              </button>
              <button className="crancy-btn crancy-color8__bg" type="submit">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2484 25.8438C18.5393 25.8472 23.4162 21.5133 24.045 16.2064C24.559 11.8667 23.0512 8.36438 19.6548 5.6833C19.0487 5.20482 18.9054 4.70219 19.2659 4.22716C19.6172 3.76249 20.1767 3.73373 20.7634 4.20071C25.0411 7.61331 26.7672 12.0576 25.6858 17.452C24.6613 22.5657 20.4371 26.5753 15.443 27.4793C14.7153 27.6116 13.9841 27.699 13.2439 27.7197C13.2462 27.094 13.2473 26.4683 13.2484 25.8438Z"
                    fill="white"
                  />
                  <path
                    d="M12.7651 3.59243C7.91199 3.64879 3.17832 7.14075 2.11629 12.3707C1.17592 17.0048 2.66891 20.8142 6.34623 23.7379C6.69304 24.014 6.97618 24.2935 6.90454 24.7812C6.79652 25.5127 6.02671 25.7956 5.37289 25.3252C3.90151 24.2682 2.70757 22.9455 1.78767 21.3755C-2.76862 13.6025 1.81951 3.52227 10.6285 1.93961C11.3392 1.81194 12.0521 1.74063 12.7707 1.69922C12.7685 2.33067 12.7662 2.96212 12.7651 3.59243Z"
                    fill="white"
                  />
                  <path
                    d="M19.2544 11.9937C19.2647 12.5941 19.0702 12.976 18.7177 13.2716C16.4049 15.2166 14.0989 17.1696 11.7679 19.0927C10.9435 19.7725 9.85758 19.6183 9.19921 18.7695C8.46352 17.8217 7.75171 16.8544 7.05354 15.8768C6.54526 15.1648 6.68058 14.2757 7.33213 13.7857C7.99732 13.2854 8.8308 13.4039 9.39252 14.1078C9.79618 14.6139 10.1885 15.1314 10.5489 15.6686C10.7661 15.9941 10.9139 15.978 11.1982 15.7364C12.9345 14.2573 14.6868 12.7977 16.4356 11.3335C16.6824 11.1265 16.9143 10.8976 17.2156 10.7665C18.1776 10.3455 19.251 11.0575 19.2544 11.9937Z"
                    fill="white"
                  />
                  <path
                    d="M13.2483 25.8439C13.2472 26.4696 13.2449 27.0953 13.2437 27.7199C13.2415 28.1408 13.2517 28.5629 13.2335 28.9839C13.2142 29.4198 13.005 29.5429 12.6525 29.3037C11.5836 28.5802 10.525 27.8395 9.46523 27.0999C9.173 26.8963 9.17186 26.6663 9.46409 26.4616C10.5238 25.7231 11.5813 24.9813 12.6513 24.259C13.0061 24.0197 13.213 24.1428 13.2335 24.5799C13.2528 25.0008 13.2449 25.4218 13.2483 25.8439Z"
                    fill="white"
                  />
                  <path
                    d="M12.7651 3.59318C12.7663 2.96288 12.7685 2.33143 12.7697 1.70113C12.7708 1.26176 12.7572 0.821235 12.7765 0.381863C12.7924 0.0115033 12.9982 -0.105816 13.3064 0.102368C14.3889 0.836187 15.4646 1.58266 16.5391 2.32913C16.8325 2.53271 16.8313 2.7639 16.5402 2.96633C15.4657 3.71395 14.3923 4.46158 13.3075 5.19424C13.005 5.39783 12.7924 5.28511 12.7765 4.91245C12.7572 4.47423 12.7674 4.03371 12.7651 3.59318Z"
                    fill="white"
                  />
                </svg>
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Profile;
