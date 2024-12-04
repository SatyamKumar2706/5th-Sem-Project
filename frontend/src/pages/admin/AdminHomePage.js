import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Grid, Paper } from '@mui/material';
import SeeNotice from '../../components/SeeNotice';
import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

gsap.registerPlugin(ScrollTrigger);

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);
    const { currentUser } = useSelector(state => state.user);
    const adminID = currentUser._id;

    const studentsRef = useRef(null);
    const classesRef = useRef(null);
    const teachersRef = useRef(null);

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    useEffect(() => {

        // ScrollTrigger.defaults({ markers: true });  // Shows start/end markers for ScrollTrigger
        // GSAP scroll animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: studentsRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
                scrub: true, // Sync animation with scrolling
            },
        });

        tl.from(studentsRef.current, { opacity: 0, y: 50, duration: 1 })
            .from(classesRef.current, { opacity: 0, y: 50, duration: 1 }, '-=0.8')
            .from(teachersRef.current, { opacity: 0, y: 50, duration: 1 }, '-=0.8');

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <PageWrapper>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <StyledPaper>
                            <img src={Students} alt="Students" />
                            <Title>Total Students</Title>
                            <Data start={0} end={numberOfStudents} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledPaper>
                            <img src={Classes} alt="Classes" />
                            <Title>Total Classes</Title>
                            <Data start={0} end={numberOfClasses} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledPaper>
                            <img src={Teachers} alt="Teachers" />
                            <Title>Total Teachers</Title>
                            <Data start={0} end={numberOfTeachers} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </PageWrapper>
    );
};

// Styled wrapper to set the background color of the page
const PageWrapper = styled.div`
  background-color: #e5e5e5; /* Change to your desired background color */
  min-height: 100vh; /* Ensure it covers the full height of the viewport */
  padding: 16px; /* Optional: Add padding if needed */
    
`;

const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 25px !important;
  background-color: #ffffff; 
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: green;
`;

export default AdminHomePage;
