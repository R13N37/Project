import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top sticky" id="navbar">
        <div class="container-fluid custom-container">
            <a class="navbar-brand logo f-30 text-dark fw-bold" href="index.html">
                <img src="images/logo.png" class="logo-dark" alt="" height="60"/>
                <img src="images/logo.png" class="logo-light" alt="" height="60"/>
            </a>
            <div>
                <button class="navbar-toggler me-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mx-auto navbar-center">
                    <li class="nav-item dropdown dropdown-hover">
                        <a class="nav-link dropdown-toggle" href="index.html" id="homedrop" role="button"
                            data-bs-toggle="dropdown">
                            Home
                        </a>
                        <ul class="dropdown-menu dropdown-menu-center" aria-labelledby="homedrop">
                            <li><a class="dropdown-item" href="index.html"><i
                                        class="mdi mdi-home-outline f-20 me-2 align-middle"></i>Home Page 1</a></li>
                            <li><a class="dropdown-item" href="index-3.html"><i
                                        class="mdi mdi-home-modern f-20 me-2 align-middle"></i>Home Page 2</a></li>
                            <li><a class="dropdown-item" href="index-4.html"><i
                                        class="mdi mdi-home-variant f-20 me-2 align-middle"></i>Home Page 3</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="index-2.html" class="nav-link">Marketplace</a>
                    </li>

                    <li class="nav-item">
                        <a href="collection.html" class="nav-link">Collection</a>
                    </li>

                    <li class="nav-item dropdown dropdown-hover">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" id="pagedropdown" role="button"
                            data-bs-toggle="dropdown">
                            Pages
                        </a>

                        <div class="dropdown-menu dropmenu-width dropdown-menu-center">
                            <div class="row">
                                <ul class="col-lg-6 list-unstyled">
                                    <li><a class="dropdown-item" href="activity.html"><i
                                                class="mdi mdi-chart-line f-20 me-2 align-middle"></i>Activity</a></li>

                                    <li><a class="dropdown-item" href="item-details.html"><i
                                                class="mdi mdi-image-filter-frames f-20 me-2 align-middle"></i>Item
                                            Details</a></li>
                                    <li><a class="dropdown-item" href="post-detail.html"><i
                                                class="mdi mdi-image-filter-center-focus-weak f-20 me-2 align-middle"></i>Post
                                            Details</a></li>
                                    <li><a class="dropdown-item" href="newsletter.html"><i
                                                class="mdi mdi-email-open-outline f-20 me-2 align-middle"></i>Newsletter</a>
                                    </li>
                                    <li><a class="dropdown-item" href="creatore.html"><i
                                                class="mdi mdi-comment-account-outline f-20 me-2 align-middle"></i>Creatore</a>
                                    </li>
                                    <li><a class="dropdown-item" href="login.html"><i
                                                class="mdi mdi-account-outline f-20 me-2 align-middle"></i>Login</a></li>

                                    <li><a class="dropdown-item" href="register.html"><i
                                                class="mdi mdi-account-box-outline f-20 me-2 align-middle"></i>Register</a></li>

                                    <li><a class="dropdown-item" href="privacy.html"><i
                                                class="mdi mdi-lock-open-outline f-20 me-2 align-middle"></i>Privacy</a></li>

                                </ul>

                                <ul class="col-lg-6 list-unstyled">
                                    <li><a class="dropdown-item" href="wallet.html"><i
                                                class="mdi mdi-wallet-travel f-20 me-2 align-middle"></i>Connect Wallet</a>
                                    </li>

                                    <li><a class="dropdown-item" href="faq.html"><i
                                                class="mdi mdi-comment-question-outline f-20 me-2 align-middle"></i>Faq</a>
                                    </li>
                                    <li><a class="dropdown-item" href="submit-request.html"><i
                                                class="mdi mdi-check-circle-outline f-20 me-2 align-middle"></i>submit
                                            Reqeust</a></li>

                                    <li><a class="dropdown-item" href="chat.html"><i
                                                class="mdi mdi-message-text-outline f-20 me-2 align-middle"></i>Chat</a>
                                    </li>

                                    <li><a class="dropdown-item" href="artical.html"><i
                                                class="mdi mdi-comment-account-outline f-20 me-2 align-middle"></i>Artical</a>
                                    </li>

                                    <li><a class="dropdown-item" href="ranking.html"><i
                                                class="mdi mdi-numeric-1-box-outline f-20 me-2 align-middle"></i>Ranking</a></li>

                                    <li><a class="dropdown-item" href="404.html"><i
                                                class="mdi mdi-alert-outline f-20 me-2 align-middle"></i>404</a></li>

                                </ul>
                            </div>
                        </div>

                    </li>


                    <li class="nav-item dropdown dropdown-hover">
                        <a class="nav-link dropdown-toggle" href="index.html" id="homedrop" role="button"
                            data-bs-toggle="dropdown">
                            Profile
                        </a>
                        <ul class="dropdown-menu dropdown-menu-center" aria-labelledby="homedrop">
                            <li><a class="dropdown-item" href="profile.html"><i
                                        class="mdi mdi-account-box-outline f-20 me-2 align-middle"></i>Profile</a></li>
                            <li><a class="dropdown-item" href="edit-profile.html"><i
                                        class="mdi mdi-account-edit f-20 me-2 align-middle"></i>Edit profile</a></li>
                        </ul>
                    </li>



                    <li class="nav-item">
                        <a href="blog.html" class="nav-link">Blog</a>
                    </li>

                    <li class="nav-item">
                        <a href="contact.html" class="nav-link">Contact</a>
                    </li>
                </ul>
                <a href="wallet.html" class="btn btn-primary">Connect to Wallet</a>

            </div>

        </div>
    </nav>
        </div>
    )
}

export default Navbar;