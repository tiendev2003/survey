import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Wrapper from "../component/email/Wrapper";
import Layout from "../component/home/Layout";
import { fetchSurveyByStudent } from "../features/khaosat/khaosatSlice";
import useMenu from "../hooks/useMenu";

function SurveyList() {
  const { khaosats } = useSelector((state) => state.khaosat);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchSurveyByStudent());
  }, [dispatch]);

  useMenu();
  return (
    <Layout>
      <Wrapper>
        <div className="container-fluid p-0">
          {loading && <div className="loading-spinner">Loading...</div>}
          <div className="row crancy-gap-30">
            <div className="col-xxl-3 col-lg-4 col-12">
              <div className="row">
                <div className="col-12"></div>
              </div>
            </div>
            <div className="container-fluid p-0">
              <div className="crancy-table crancy-table__support mg-top-30">
                <div className="crancy-table__heading">
                  <h3 className="crancy-table__title mb-0">
                    Danh sách khảo sát
                  </h3>
                  <div className="crancy-table__right">
                    <form
                      className="crancy-header__form-inner"
                      id="dataTables_filter"
                    >
                      <button className="search-btn" type="submit">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.1139 12.2238C7.4892 14.923 3.16075 13.4917 1.28129 10.8389C-0.69718 8.04734 -0.360234 4.26363 2.12465 1.87472C4.54242 -0.450394 8.3824 -0.627818 11.0414 1.42684C13.7204 3.49679 14.7525 7.69781 12.2702 11.0396C12.348 11.1227 12.4264 11.2111 12.5101 11.2955C13.9031 12.6896 15.2994 14.0804 16.6897 15.4772C17.2214 16.0115 17.0486 16.7923 16.3667 16.9724C15.9906 17.0714 15.7068 16.9066 15.4483 16.6474C14.1125 15.3058 12.7707 13.9701 11.4355 12.6278C11.3112 12.5042 11.2149 12.3527 11.1139 12.2238ZM1.69666 6.82731C1.69134 9.66011 3.97486 11.9547 6.81531 11.9713C9.66971 11.9879 11.9732 9.69998 11.9785 6.84392C11.9838 4.00115 9.70825 1.71258 6.86515 1.70062C4.01275 1.68866 1.70198 3.97989 1.69666 6.82731Z"
                            fill="#0A82FD"
                          ></path>
                        </svg>
                      </button>
                      <input
                        id="ticketinfo"
                        type="search"
                        placeholder="Search"
                        aria-controls="crancy-table__main"
                      />
                    </form>
                  </div>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="table_1"
                    role="tabpanel"
                    aria-labelledby="table_1"
                  >
                    <table
                      id="crancy-table__main"
                      className="crancy-table__main crancy-table__ticket"
                    >
                      <thead className="crancy-table__head">
                        <tr>
                          <th className="crancy-table__column-1 crancy-table__h1">
                            ID
                          </th>
                          <th className="crancy-table__column-2 crancy-table__h2">
                            Title
                          </th>
                          <th className="crancy-table__column-3 crancy-table__h3">
                            Description
                          </th>
                          <th className="crancy-table__column-4 crancy-table__h4">
                            Start Date
                          </th>
                          <th className="crancy-table__column-5 crancy-table__h5">
                            End Date
                          </th>
                          <th className="crancy-table__column-6 crancy-table__h6">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="crancy-table__body">
                        {khaosats.map((survey) => {
                          const isExpired = new Date(survey.end_date) < new Date();
                          return (
                            <tr key={survey.id}>
                              <td className="crancy-table__column-1 crancy-table__data-1">
                                {survey.id}
                              </td>
                              <td className="crancy-table__column-2 crancy-table__data-2">
                                {survey.title}
                              </td>
                              <td className="crancy-table__column-3 crancy-table__data-3">
                                {survey.description}
                              </td>
                              <td className="crancy-table__column-4 crancy-table__data-4">
                                {new Date(survey.start_date).toLocaleDateString()}
                              </td>
                              <td className="crancy-table__column-5 crancy-table__data-5">
                                {new Date(survey.end_date).toLocaleDateString()}
                              </td>
                              <td className="crancy-table__column-6 crancy-table__data-6">
                                {!isExpired ? (
                                  <Link
                                    to={`/student/survey-list/${survey.id}`}
                                    className="crancy-table__view"
                                  >
                                    <FontAwesomeIcon icon={faEye} />
                                  </Link>
                                ) : (
                                  <span className="crancy-table__expired">Expired</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className="crancy-table-bottom">
                      <div
                        id="crancy-table__main_filter"
                        className="dataTables_filter"
                      >
                        <label>
                          Search:
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder=""
                            aria-controls="crancy-table__main"
                          />
                        </label>
                      </div>
                      <div
                        className="dataTables_length"
                        id="crancy-table__main_length"
                      >
                        <label>
                          Show result:
                          <select
                            name="crancy-table__main_length"
                            aria-controls="crancy-table__main"
                            className="form-select form-select-sm"
                            onChange={(e) => setShow(e.target.value)}
                            defaultValue={25}
                          >
                            <option value="4">4</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="table_2"
                    role="tabpanel"
                    aria-labelledby="table_1"
                  >
                    <table
                      id="crancy-table__main"
                      className="crancy-table__main crancy-table__ticket"
                    >
                      <thead className="crancy-table__head">
                        <tr>
                          <th className="crancy-table__column-1 crancy-table__h1">
                            ID
                          </th>
                          <th className="crancy-table__column-2 crancy-table__h2">
                            Subject
                          </th>
                          <th className="crancy-table__column-3 crancy-table__h3">
                            Date
                          </th>
                          <th className="crancy-table__column-4 crancy-table__h4">
                            Customer
                          </th>
                          <th className="crancy-table__column-5 crancy-table__h5">
                            Status
                          </th>
                          <th className="crancy-table__column-6 crancy-table__h6">
                            Priority
                          </th>
                        </tr>
                      </thead>
                      <tbody className="crancy-table__body">
                        <tr>
                          <td className="crancy-table__column-1 crancy-table__data-1">
                            <div className="crancy-table__product--id">
                              <p className="crany-table__product--number">
                                <a href="ticket-details.html">#3356</a>
                              </p>
                            </div>
                          </td>
                          <td className="crancy-table__column-2 crancy-table__data-2">
                            <h5 className="crancy-table__inner--title">
                              <a href="ticket-details.html">
                                AuthorID checks for AudioJungle find that...
                              </a>
                            </h5>
                          </td>
                          <td className="crancy-table__column-3 crancy-table__data-3">
                            <p className="crancy-table__text crancy-table__time">
                              2/05/2023
                            </p>
                          </td>
                          <td className="crancy-table__column-4 crancy-table__data-4">
                            <h5 className="crancy-table__inner--title">
                              Dianne Russell
                            </h5>
                          </td>
                          <td className="crancy-table__column-5 crancy-table__data-5">
                            <div className="crancy-table__status">Done</div>
                          </td>
                          <td className="crancy-table__column-6 crancy-table__data-6">
                            <div className="crancy-flex-between">
                              <h5 className="crancy-table__inner--title">
                                High
                              </h5>
                              <div className="crancy-chatbox__toggle">
                                <svg
                                  width="6"
                                  height="25"
                                  viewBox="0 0 4 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    r="2"
                                    transform="matrix(1 0 0 -1 2 14)"
                                  ></circle>
                                  <circle
                                    r="2"
                                    transform="matrix(1 0 0 -1 2 8)"
                                  ></circle>
                                  <circle
                                    r="2"
                                    transform="matrix(1 0 0 -1 2 2)"
                                  ></circle>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="crancy-table__column-1 crancy-table__data-1">
                            <div className="crancy-table__product--id">
                              <p className="crany-table__product--number">
                                <a href="ticket-details.html">#3356</a>
                              </p>
                            </div>
                          </td>
                          <td className="crancy-table__column-2 crancy-table__data-2">
                            <h5 className="crancy-table__inner--title">
                              <a href="ticket-details.html">
                                You’ve spent hours researching ...
                              </a>
                            </h5>
                          </td>
                          <td className="crancy-table__column-3 crancy-table__data-3">
                            <p className="crancy-table__text crancy-table__time">
                              2/05/2023
                            </p>
                          </td>
                          <td className="crancy-table__column-4 crancy-table__data-4">
                            <h5 className="crancy-table__inner--title">
                              Adim Makram
                            </h5>
                          </td>
                          <td className="crancy-table__column-5 crancy-table__data-5">
                            <div className="crancy-table__status crancy-table__status--cancel">
                              Cancel
                            </div>
                          </td>
                          <td className="crancy-table__column-6 crancy-table__data-6">
                            <div className="crancy-flex-between">
                              <h5 className="crancy-table__inner--title">
                                Law
                              </h5>
                              <div className="crancy-chatbox__toggle">
                                <svg
                                  width="6"
                                  height="25"
                                  viewBox="0 0 4 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    r="2"
                                    transform="matrix(1 0 0 -1 2 14)"
                                  ></circle>
                                  <circle
                                    r="2"
                                    transform="matrix(1 0 0 -1 2 8)"
                                  ></circle>
                                  <circle
                                    r="2"
                                    transform="matrix(1 0 0 -1 2 2)"
                                  ></circle>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default SurveyList;