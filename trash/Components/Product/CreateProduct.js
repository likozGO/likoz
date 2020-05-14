//
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             width: '100%',
//         },
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
//     buttonAddProduct: {
//         height: '100%',
//     },
// }));
//
//
// function handleAddProduct(e) {
//     e.preventDefault();
//     const { username, title, description, quantity, price, date } = e.currentTarget.elements;
//     let product = {
//         username: username.value,
//         title: title.value,
//         description: description.value,
//         quantity: quantity.value,
//         price: price.value,
//         date: new Date(date.value),
//     }
//
//     console.log(product)
// }
//
// export default function CreateProduct() {
//     const classes = useStyles();
//
//     const [selectedDate, setSelectedDate] = React.useState(Date.now);
//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//     };
//
//         return (
//             <>
//                 <Container maxWidth="sm">
//                     <Typography variant="h3" gutterBottom>
//                         Create product
//                     </Typography>
//                     <form className={classes.root} noValidate autoComplete="off" onSubmit={handleAddProduct}>
//                         <Grid container spacing={3}>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     required
//                                     id="username"
//                                     name="username"
//                                     label="Username of author product"
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <TextField
//                                     required
//                                     id="title"
//                                     name="title"
//                                     label="Product title"
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     id="description"
//                                     label="Description of product"
//                                     multiline
//                                     rows={6}
//                                     fullWidth
//                                     variant="outlined"
//                                 />
//                             </Grid>
//                             <Grid item xs={6} sm={6}>
//                                 <TextField
//                                     id="quantity"
//                                     label="Quantity"
//                                     type="number"
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item xs={6} sm={6}>
//                                 <TextField
//                                     id="price"
//                                     label="Price"
//                                     type="number"
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                                     <KeyboardDatePicker
//                                         margin="normal"
//                                         id="date"
//                                         label="Date picker dialog"
//                                         format="MM/dd/yyyy"
//                                         value={selectedDate}
//                                         onChange={handleDateChange}
//                                         KeyboardButtonProps={{
//                                             'aria-label': 'change date',
//                                         }}
//                                         fullWidth
//                                     />
//                                 </MuiPickersUtilsProvider>
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     size="large"
//                                     className={`${classes.buttonAddProduct}`}
//                                     startIcon={<AddShoppingCartIcon />}
//                                     fullWidth
//                                     type='submit'
//                                 >
//                                     Add
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </Container>
//             </>
//         )
// }