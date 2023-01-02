import classes from './TitreH1.module.css';

const TitreH1 = (props) => {
    return (
        <h1 className={`border border-dark p-2 m-2 bg-primary rounded text-center text-white ${classes.titreH1}`}>
            {props.children}
        </h1>
    );
}

export default TitreH1;